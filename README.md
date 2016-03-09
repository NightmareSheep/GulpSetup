# GulpSetup

<p>This is a basic front-end setup for .net MVC projects, although it is designed to be flexible enough for other projects as well. The main focus of the setup is to be simple and extendible. </p><p>In its most basic form the setup provides tasks for:</p>
<ul>
	<li>bundling and minifying javascript</li>
	<li>bundling and minifying Css and Sass</li>
	<li>optimizing images</li>
	<li>auto include of bower components (styling and Javascript only)</li>
</ul>
<p>Instead of putting all the tasks in one gulpfile, each task gets is own file and is inserted as a module.  You can find all the separate tasks in the gulp-tasks folder, this makes it easy to extend the setup without altering and maintaining a large gulpfile.</p>
<p>The setup also contains a gulp-config file, this file contains configuration for which js, css, sass and images should be processed, and where the processed files should end up.</p>
<p>For the basic setup results in six files:</p>
<ol>
	<li><b>Scripts/bundle.js -</b> Bundle of all your Javascript</li>
	<li><b>Scripts/bundle.js.map -</b> Source-map of the scripts bundle</li>
	<li><b>Scripts/libs.js -</b> Bundle of all the Javascript from your bower components</li>
	<li><b>Content/bundle.css -</b> Bundle of all your Css and Sass</li>
	<li><b>Content/bundle.css.map -</b> Source-map of the styling bundle</li>
	<li><b>Content/libs.css -</b> Bundle of all the Css and Sass from your bower components</li>
</ol>

<h2>Configuration</h2>
<p>The basic configuration looks like this:</p>
<pre>
<code>
{
    "scriptBundles": [
        {
            "name": "bundle.js",
            "files": [ "Scripts/**/*.js", "!Scripts/**/*.min.js", "!Scripts/_references.js", "!Scripts/bundle.js", "!Scripts/libs.js" ],
            "destination": "Scripts/"
        }
    ],
    "styleBundles": [
        {
            "name": "bundle.css",
            "files": [ "Content/scss/*.scss", "Content/*.css", "!Content/*.min.css", "!Content/bundle.css" ],
            "destination": "Content/"
        }
    ],
    "bower": {
        "scripts": {
            "name": "libs.js",
            "destination": "Scripts/"
        },
        "styling": {
            "name": "libs.css",
            "destination" : "Content/"
        }
    },
    "images": "Images/*.png",
    "imagesDestination": "images"
}
</code>
</pre>

<h3>Script and Style bundles</h3>
<p>Bundles are a list of bundle objects, each bundle object contains the properties:</p>
<ul>
	<li><b>Name -</b> Name of processed bundle</li>
	<li><b>Files -</b> Query of all the files that should be processed into the bundle</li>
	<li><b>Destination -</b> Location where the processed bundle will end up</li>
</ul>
<p>The basic setup contains two bundles, a styling and a script bundle. They follow standard .net mvc conventions of keeping Javascript in a Scripts folder and styling in a Content folder.</p>
<h3>Bower</h3>
<p>The bower configuration works much the same as the bundling configuration, but here you cannot specify the included files yourself as they are auto included in the bundle.</p>
<h3>Images</h3>
<ul>
	<li><b>Images -</b> Which images should be processed</li>
	<li><b>imagesDestination-</b> Where the processed images should end up</li>
</ul>