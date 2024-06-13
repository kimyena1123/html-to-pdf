const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ 
    headless: true, // 또는 false로 설정하여 브라우저 창을 열고 디버깅 가능
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();

  const filePath = 'file:///C:/nanugo_work/html-to-pdf/input.html';
  const outputPath = 'C:\\nanugo_work\\html-to-pdf\\pdf-result\\20240613_신축성 나노복합체를 이용한 바이오집적센서 기술.pdf';

  // HTML 파일 로드
  await page.goto(filePath, { waitUntil: 'networkidle2', timeout: 60000 }); // 60초로 늘리기
  
  // PDF로 저장
  await page.pdf({ path: outputPath, format: 'A4' });
  
  await browser.close();
})();
