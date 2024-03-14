import { getSchemaList } from '@/request/api/schema';

import { writeSchemaFile } from './generator';

export async function generatorSchemaFileFromRemote({
  outputDir,
  outputFile = `schema`,
}: {
  outputDir: string;
  outputFile?: string;
}) {
  // 从知晓云中读取列表数据
  const response = await getSchemaList();

  return writeSchemaFile(response.data.objects, {
    outputDir,
    outputFile,
  });
}
