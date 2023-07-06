import { getSchemaList } from '../../request/api/schema';
import { writeSchemaFile } from './template';

export async function generatorSchemaFileFromRemote({
  outputDir,
  outputFile = `schema`,
}: {
  outputDir: string;
  outputFile?: string;
}) {
  try {
    // 从知晓云中读取列表数据
    const response = await getSchemaList();

    return writeSchemaFile(response.data.objects, {
      outputDir,
      outputFile,
    });
  } catch (error) {
    console.error(
      `[command/type] ${
        error instanceof Error ? error.message : '获取数据表列表失败'
      }`,
    );
  }
}
