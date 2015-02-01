Meteor data adapter for Webix UI
================================

Library allows to use [Webix](http://webix.com) components with [Meteor](https://meteor.com/)

How to use
-----------

- Copy codebase/meteor-data.js in the "public" folder of your project
- Define data collection in default way

```js
Books = new Mongo.Collection("books");
```

- Include Webix files on the page

```html
<head>
	<!-- Webix -->
	<script type="text/javascript" src="http://cdn.webix.io/2.2/webix.js"></script>
	<link rel="stylesheet" type="text/css" href="http://cdn.webix.io/2.2/webix.css">
	<!-- Webix-Data adapter -->
	<script type="text/javascript" src="meteor-data.js"></script>
</head>
```

- Init webix component, using "meteor->{collection}" as data url

```js
webix.ui({
	view:"datatable",
	editable:true, editaction:"dblclick",
	columns:[{
		id:"name", editor:"text", fillspace:1
	},{
		id:"author", editor:"text", fillspace:1
	}],

	//load data from "books"
	url: "meteor->books",
	//save data to "books"
	save:"meteor->books"
}
```	

That is it.

Adding "url" property will enable data loading and automatic updates of component when data changed in the Books Collection

Adding "save" property ensures that all changes in the datatable will be saved back to Books Collection



### Using Cursors

Instead of using text url you can use cursors and collections directly


#### Cursor

```js
Books = new Mongo.Collection("books");
var data = Books.find();

webix.ui({
	view:"list",
	url: webix.proxy("meteor", data)
}
```

#### Collection

```js
Books = new Mongo.Collection("books");

webix.ui({
	view:"list",
	url:  webix.proxy("meteor", Books),
	save: webix.proxy("meteor", Books)
}
```	

#### Mixing both


```js
Books = new Mongo.Collection("books");
var data = Books.find();

webix.ui({
	view:"list",
	url:  webix.proxy("meteor", Books.find()),
	save: webix.proxy("meteor", Books),
}
```


### Dynamic data loading

You can use "load" command to (re)load data in the component. 

```js
$$("dtable").load("meteor->books");
```

or

```js
$$("dtable").load( webix.proxy("meteor", Books.find() ) );
```




### Sync api

Webix components has native [sync](http://docs.webix.com/api__link__ui.proto_sync.html) api to [sync data between components](http://docs.webix.com/desktop__data_binding.html). The same api can be used with Meteor


```
Books = new Mongo.Collection("books");
$$("dtable").sync(ref);
```



Samples
-----------

There are no live samples unfortunately, you can look at samples folder for basic usage example



License
----------

The MIT License

Copyright (c) 2015 Maksim Kozhukh 

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
