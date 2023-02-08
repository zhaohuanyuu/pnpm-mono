import * as fs from 'node:fs/promises';
import * as path from 'path';
import {
  addProjectConfiguration,
  readJsonFile,
  writeJsonFile,
  formatFiles,
  generateFiles,
  getWorkspaceLayout,
  names,
  offsetFromRoot,
  Tree,
} from '@nrwl/devkit';
import { AppGeneratorSchema } from './schema';

interface NormalizedSchema extends AppGeneratorSchema {
  appRoot: string;
  projectName: string;
  projectRoot: string;
  projectDirectory: string;
  parsedTags: string[];
}

function normalizeOptions(tree: Tree, options: AppGeneratorSchema): NormalizedSchema {
  const name = names(options.name).fileName;
  const projectDirectory = options.directory
    ? `${names(options.directory).fileName}/${name}`
    : name;
  const appRoot = `${getWorkspaceLayout(tree).appsDir}`
  const projectName = projectDirectory.replace(new RegExp('/', 'g'), '-');
  const projectRoot = `${getWorkspaceLayout(tree).libsDir}/${projectDirectory}`;
  const parsedTags = options.tags
    ? options.tags.split(',').map((s) => s.trim())
    : [];

  return {
    ...options,
    appRoot,
    projectName,
    projectRoot,
    projectDirectory,
    parsedTags,
  };
}

function addFiles(tree: Tree, options: NormalizedSchema) {
  const templateOptions = {
    ...options,
    ...names(options.name),
    offsetFromRoot: offsetFromRoot(options.appRoot),
    template: ''
  };
  const srcDir = 'templates/' + templateOptions.templateDirName;
  const targetDir = templateOptions.appRoot + '/' + templateOptions.projectName;

  generateFiles(tree, srcDir, targetDir, templateOptions);
}

function updateSchema() {
  // update templatesDirName x-prompt items
  fs.readdir(path.join(process.cwd(), '/templates')).then(templatesDir => {
    const schemaDir = path.resolve(__dirname, './schema.json');
    const schemaJson = readJsonFile(schemaDir);
    schemaJson.properties.templateDirName['x-prompt'].items = templatesDir.map(name => ({ value: name, label: name }));
    writeJsonFile(schemaDir, schemaJson);
  })
}

export default async function (tree: Tree, options: AppGeneratorSchema) {
  const normalizedOptions = normalizeOptions(tree, options);
  /*addProjectConfiguration(tree, normalizedOptions.projectName, {
    root: normalizedOptions.projectRoot,
    projectType: 'library',
    sourceRoot: `${normalizedOptions.projectRoot}/src`,
    targets: {
      build: {
        executor: "tooling:build",
      },
    },
    tags: normalizedOptions.parsedTags,
  });*/
  updateSchema();
  if (!options.disableGenerate) {
    addFiles(tree, normalizedOptions);
  }
  await formatFiles(tree);
}
