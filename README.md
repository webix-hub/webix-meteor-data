Meteor data adapter for Webix UI
================================

Allows using [Webix](http://webix.com) UI components with [Meteor](https://meteor.com/).
Reactive widgets that have been tested include [DataTable](http://docs.webix.com/datatable__index.html)
and [List](http://docs.webix.com/desktop__list.html). All other widgets with
[linear](http://docs.webix.com/desktop__dynamic_loading.html) underlying data structures should work too. Tree and TreeTable don't work at the moment - keep an eye on [issue #7](https://github.com/webix-hub/webix-meteor-data/issues/7#issuecomment-119328896]).

How to use
-----------

- Add the [webix package](https://atmospherejs.com/webix):

    ```sh
    meteor add webix:webix
    ```

- Define data collections as usual:

    ```js
    Movies = new Mongo.Collection('movies');
    ```

- Initialize Webix components using "meteor->{collection}" as the data URL:

    ```js
    webix.ui({
      view: 'datatable',
      editable: true, editaction: 'dblclick',
      autoconfig: true,
      // load data from the "movies" collection
      url: 'meteor->books',
      // save data to the 'movies' collection
      save: 'meteor->books'
    }
    ```

That is it.

Adding the `url` property will enable data loading and automatic component updates when data changes in the
specified [Collection](http://docs.meteor.com/#/full/collections).

The `save` property ensures that all changes to the component will be saved back to the Collection.



### Using Cursors

Instead of using a string for the `url` property, you can use cursors and collections directly.


#### Cursor

```js
Movies = new Mongo.Collection('movies');
var cursor = Movies.find();

webix.ui({
  view: 'list',
  url: webix.proxy('meteor', cursor)
});
```

#### Collection

```js
Movies = new Mongo.Collection('movies');

webix.ui({
  view: 'list',
  url:  webix.proxy('meteor', Movies),
  save: webix.proxy('meteor', Movies)
});
```  

#### Mixing cursors and collections

```js
Movies = new Mongo.Collection('movies');

webix.ui({
  view: 'list',
  url:  webix.proxy('meteor', Movies.find()),
  save: webix.proxy('meteor', Movies)
});
```


### Dynamic data loading

You can use [`load`](http://docs.webix.com/api__atomdataloader_load.html) method to (re)load data in the component. 

```js
$$('datatable').load('meteor->movies');
```

or

```js
$$('datatable').load( webix.proxy('meteor', Movies.find()) );
```




### Sync api

Webix components have a [sync](http://docs.webix.com/api__link__ui.proto_sync.html) method to
[synchronize data between components](http://docs.webix.com/desktop__data_binding.html). The method can be used with Meteor.


```
Movies = new Mongo.Collection('movies');
$$('details').sync($$('datatable'));
```



Examples
--------

* [CRUD example](http://webix.meteor.com) - [source](https://github.com/dandv/meteor-webix)



License
----------

Webix is published under the [GPLv3 license](https://github.com/dandv/meteor-webix/issues/1#issuecomment-74756813).

This Meteor-Webix adapter is released under the MIT License:

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
