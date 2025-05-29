import settings from './settings.json' with { type: 'json' };

export default function (config) {
    config.addPassthroughCopy('./assets/');

    config.addFilter('stringify', (data) => {
        return JSON.stringify(data, null, "\t")
    });

    config.addFilter('itemsAtThisMachine', (vendingMachineItems, items) => {
        // Get item slugs in this machine
        const includedSlugs = vendingMachineItems
            .filter((vmi) => vmi.vendingMachine === settings.slug)
            .map((vmi) => vmi.item);

        // Return only items that match those slugs
        console.log(items.filter((item) => includedSlugs.includes(item.slug)))
        return items.filter((item) => includedSlugs.includes(item.slug));
    });

    return {
        dir: {
            input: "src",
            output: "_site",
            includes: "_includes",
            data: "_data"
        },
        templateFormats: ["html", "njk", "md"], // include html explicitly
        htmlTemplateEngine: "njk",              // tells Eleventy to parse .html as Nunjucks
        markdownTemplateEngine: "njk"
    };
}