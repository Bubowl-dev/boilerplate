const fs = require("fs");
const path = require("path");

const [, , baseFolder, newFolder] = process.argv;
const basePath = "./src/components";

const fullPath = path.join(basePath, baseFolder, newFolder);

fs.mkdirSync(fullPath, { recursive: true });

const toPascalCase = (str) => {
  return str
    .split(/[-_]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
};

const folderNamePascalCase = toPascalCase(newFolder);

const indexContent = `import * as S from "./styles";
import C from './constants';
import useAnimation from "./animation";

export const ${folderNamePascalCase} = () => {
  useAnimation();
  return <S.${folderNamePascalCase}>{C.test}</S.${folderNamePascalCase}>;
};
`;

const stylesContent = `import styled from "styled-components";

export const ${folderNamePascalCase} = styled.div\`\`;
`;

const propsContent = `export interface ${folderNamePascalCase}Props {}
`;

const animationContent = `import gsap from "gsap";

export default () => {};
`;

const constantsContent = `export default {
  test: "teste",
};
`;

fs.writeFileSync(path.join(fullPath, "index.tsx"), indexContent);
fs.writeFileSync(path.join(fullPath, "styles.ts"), stylesContent);
fs.writeFileSync(path.join(fullPath, "props.ts"), propsContent);
fs.writeFileSync(path.join(fullPath, "animation.ts"), animationContent);
fs.writeFileSync(path.join(fullPath, "constants.tsx"), constantsContent);

console.log(`Componente criado com sucesso! '${newFolder}' e arquivos em '${fullPath}'`);
