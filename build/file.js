const fs = require('fs');
const path = require('path');
const xlsx = require('node-xlsx');

const excelData = xlsx.parse(
  path.resolve(__dirname, '../doc/开源社区变量2.2.xlsx')
);

// 颜色
const colorData = [];
for (let i = 0; i < excelData[1].data.length; i++) {
  const item = excelData[1].data[i];

  if (item.length > 0) {
    if (item.length === 1) {
      colorData.push({ name: item[0], content: [] });
    } else if (item[0] !== '变量名') {
      colorData[colorData.length - 1].content.push({
        name: item[0],
        val: item[2],
      });
    }
  }
}

fs.writeFile(
  path.resolve(__dirname, '../app/.vitepress/src/data/color.ts'),
  `export default ${JSON.stringify(colorData)}`,
  'utf8',
  (error) => {
    if (error) {
      console.log(error);
      return false;
    }
    console.log('颜色写入成功');
  }
);

// 字号&行高
const fontData = [];
for (let i = 0; i < excelData[2].data.length; i++) {
  const item = excelData[2].data[i];

  if (item.length > 0) {
    if (item.length === 1) {
      fontData.push({ name: item[0], content: [] });
    } else if (item[0] !== '变量名') {
      fontData[fontData.length - 1].content.push({
        name: item[0],
        val: item[1],
      });
    }
  }
}

fs.writeFile(
  path.resolve(__dirname, '../app/.vitepress/src/data/font.ts'),
  `export default ${JSON.stringify(fontData)}`,
  'utf8',
  (error) => {
    if (error) {
      console.log(error);
      return false;
    }
    console.log('font写入成功');
  }
);

// 阴影
const shadowData = [];
for (let i = 0; i < excelData[3].data.length; i++) {
  const item = excelData[3].data[i];

  if (item.length > 0) {
    if (item.length === 1) {
      shadowData.push({ name: item[0], content: [] });
    } else if (item[0] !== '变量名') {
      shadowData[shadowData.length - 1].content.push({
        name: item[0],
        val: item[1],
      });
    }
  }
}

fs.writeFile(
  path.resolve(__dirname, '../app/.vitepress/src/data/shadow.ts'),
  `export default ${JSON.stringify(shadowData)}`,
  'utf8',
  (error) => {
    if (error) {
      console.log(error);
      return false;
    }
    console.log('阴影写入成功');
  }
);

// gap
const gapData = [];
for (let i = 0; i < excelData[4].data.length; i++) {
  const item = excelData[4].data[i];

  if (item.length > 0) {
    if (item.length === 1) {
      gapData.push({ name: item[0], content: [] });
    } else if (item[0] !== '变量名') {
      gapData[gapData.length - 1].content.push({
        name: item[0],
        val: item[1],
      });
    }
  }
}

fs.writeFile(
  path.resolve(__dirname, '../app/.vitepress/src/data/gap.ts'),
  `export default ${JSON.stringify(gapData)}`,
  'utf8',
  (error) => {
    if (error) {
      console.log(error);
      return false;
    }
    console.log('gap写入成功');
  }
);

// iconSize
const iconSizeData = [];
for (let i = 0; i < excelData[5].data.length; i++) {
  const item = excelData[5].data[i];

  if (item.length > 0) {
    if (item.length === 1) {
      iconSizeData.push({ name: item[0], content: [] });
    } else if (item[0] !== '变量名') {
      iconSizeData[iconSizeData.length - 1].content.push({
        name: item[0],
        val: item[1],
      });
    }
  }
}

fs.writeFile(
  path.resolve(__dirname, '../app/.vitepress/src/data/iconsize.ts'),
  `export default ${JSON.stringify(iconSizeData)}`,
  'utf8',
  (error) => {
    if (error) {
      console.log(error);
      return false;
    }
    console.log('iconsize写入成功');
  }
);

// radius
const radiusData = [];
for (let i = 0; i < excelData[6].data.length; i++) {
  const item = excelData[6].data[i];

  if (item.length > 0) {
    if (item.length === 1) {
      radiusData.push({ name: item[0], content: [] });
    } else if (item[0] !== '变量名') {
      radiusData[radiusData.length - 1].content.push({
        name: item[0],
        val: item[1],
      });
    }
  }
}

fs.writeFile(
  path.resolve(__dirname, '../app/.vitepress/src/data/radius.ts'),
  `export default ${JSON.stringify(radiusData)}`,
  'utf8',
  (error) => {
    if (error) {
      console.log(error);
      return false;
    }
    console.log('radius写入成功');
  }
);
