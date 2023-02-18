import { getSchemaList } from '../../request/api/schema';
import { writeSchemaListToTsFile } from './template';

export async function generatorSchemaTsFromMincloud({
  outputDir,
  outputFileName = `schema`,
}: {
  outputDir: string;
  outputFileName?: string;
}) {
  try {
    // 从知晓云中读取列表数据
    const response = await getSchemaList();

    return writeSchemaListToTsFile(response.data.objects, {
      outputDir,
      outputFileName,
    });
  } catch (error) {
    console.error(
      `[command/type] ${
        error instanceof Error ? error.message : '获取数据表列表失败'
      }`
    );
  }
}
