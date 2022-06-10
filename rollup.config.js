import 'dotenv/config';
import { getRollupConfig } from '@elderjs/elderjs';
import svelteConfig from './svelte.config';
export default [...getRollupConfig({ svelteConfig })];
