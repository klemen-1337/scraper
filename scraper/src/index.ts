import puppeteer from 'puppeteer';
import { parse } from 'json2csv';

interface Property{
    title: string,
    price: string,
    location: string,
    imageUrl: string,
}

async function getProperties(pageId: number): Promise<Property[]> {

    let properties: Property[] = []
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    await page.goto('https://www.sreality.cz/en/search/for-sale/apartments?page=' + pageId, { waitUntil: 'networkidle2', timeout: 60000 });
    
    // Wait for the desired content to load on the page
    
    // Extract the data you need from the page
    const property = await page.$$eval('.property', (elements) =>
        elements.map((element) => ({
        title: element.querySelector('h2')?.textContent?.trim() ?? '',
        price: element.querySelector('.price .norm-price').textContent,
        location: element.querySelector('.locality').textContent,
        imageUrl: element.querySelector('img').getAttribute("src"),
        }))
    );
    properties.push(...property);
    await browser.close();

    return properties
}

async function main(){
    let properties: Property[] = []

    for (let i = 1; i < 26; i++) {
        const property = await getProperties(i);   
        properties.push(...property);
    }
    console.log(parse(properties));
}

main()