export default async function main(event) {
  const { name, year } = event.data;

  return {
    name: `${name}_${year + 1}`,
  };
}
