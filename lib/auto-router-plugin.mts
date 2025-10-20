import path from 'node:path';
import fs from 'node:fs';
import { PluginOption } from 'vite';
import { autoRouterConfig } from './auto-router-config.mts';

type AutoRouterOptions = {
  pagesPath?: string;
  readonly genCodeDirPath: string;
  readonly genCodeAlias: string;
};

export function autoRouter(options: AutoRouterOptions): PluginOption {
  autoRouterConfig.pagesPath = options?.pagesPath || 'app/pages';

  return {
    name: 'auto-router-plugin',

    config(config) {
      if (!config.resolve) {
        config.resolve = {};
      }
      if (!config.resolve.alias) {
        config.resolve.alias = {};
      }

      const replacement = path.resolve(
        process.cwd(),
        autoRouterConfig.pagesPath,
      );

      if (Array.isArray(config.resolve.alias)) {
        config.resolve.alias.push({
          find: autoRouterConfig.genCodeAlias,
          replacement,
        });
      } else {
        (config.resolve.alias as Record<string, string>)[
          autoRouterConfig.genCodeAlias
        ] = replacement;
      }

      console.log(`After config() hook, alias is now:`, config.resolve.alias);
    },

    buildStart() {
      console.log(
        `Listing all pages in ${autoRouterConfig.pagesPath} directory:`,
      );
      const pagesDir = path.resolve(process.cwd(), autoRouterConfig.pagesPath);
      if (fs.existsSync(pagesDir)) {
        const pages = fs.readdirSync(pagesDir);
        pages.forEach((page) => {
          console.log(`- ${page}`);
        });
      } else {
        console.log('No /app/pages directory found.');
      }
    },
  };
}
