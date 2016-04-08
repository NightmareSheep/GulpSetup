{
    "scriptBundles": [
        {
            "name": "$rootnamespace$.js",
            "files": [ "Scripts/**/*.js", "!Scripts/**/*.min.js", "!Scripts/_references.js", "!Scripts/bundle.js", "!Scripts/libs.js" ],
            "destination": "../../build/Website/Scripts/"
        }
    ],
    "styleBundles": [
        {
            "name": "$rootnamespace$.css",
            "files": [ "Content/scss/*.scss", "Content/*.css", "!Content/*.min.css", "!Content/bundle.css" ],
            "destination": "../../build/Website/Content/"
        }
    ],
    "bower": {
        "scripts": {
            "name": "$rootnamespace$.libs.js",
            "destination": "../../build/Website/Scripts/"
        },
        "styling": {
            "name": "$rootnamespace$.libs.css",
            "destination" : "../../build/Website/Content/"
        }
    },
    "images": "Images/*.png",
    "imagesDestination": "images"
}
