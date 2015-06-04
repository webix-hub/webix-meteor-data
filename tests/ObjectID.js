'use strict';

var collectionMapWithObjectIDs = {
    '54aebfacd0269c217710265a':
    {
        _id: new Meteor.Collection.ObjectID("54aebfacd0269c217710265a"),
        someData: "something",
        moreData: true,
        someCode: "PT"
    },
    '54aebfacd0269c217710265b': {
        _id: new Meteor.Collection.ObjectID("54aebfacd0269c217710265b"),
        someData: "europa",
        moreData: false,
        someCode: "ES"
    }
};

var collectionMapStringIDs = {
    "KCxbdXLL6GXtCqaQk":
    {
        _id: "KCxbdXLL6GXtCqaQk",
        someData: "something",
        moreData: true,
        someCode: "PT"
    },
    "LgXXCwt4KsBFAZmGh": {
        _id: "LgXXCwt4KsBFAZmGh",
        someData: "europa",
        moreData: false,
        someCode: "ES"
    }
};


Tinytest.add('record has objectID', function (test) {
    test.isTrue(webix.proxy.meteor.idHelper.recordHasObjectID(collectionMapWithObjectIDs, '54aebfacd0269c217710265a'), 'single record has objectID');
});

Tinytest.add('collection has objectIDs', function (test) {
    test.isTrue(webix.proxy.meteor.idHelper.collectionHasObjectIDs(collectionMapWithObjectIDs), 'collection has objectIDs');
});

Tinytest.add('record has string id', function (test) {
    test.isFalse(webix.proxy.meteor.idHelper.recordHasObjectID(collectionMapStringIDs, 'KCxbdXLL6GXtCqaQk'), 'single record has string id');
});

Tinytest.add('collection has string ids', function (test) {
    test.isFalse(webix.proxy.meteor.idHelper.collectionHasObjectIDs(collectionMapStringIDs), 'collection has String ids');
});

Tinytest.add('null collection, test for false', function (test) {
    test.isFalse(webix.proxy.meteor.idHelper.recordHasObjectID(null, 'KCxbdXLL6GXtCqaQk'), 'null collection');
});

Tinytest.add('empty collection, test for false', function (test) {
    test.isFalse(webix.proxy.meteor.idHelper.collectionHasObjectIDs({}), 'empty collection');
});

Tinytest.add('null id, test for false', function (test) {
    test.isFalse(webix.proxy.meteor.idHelper.recordHasObjectID(collectionMapWithObjectIDs, null), 'empty collection');
});

Tinytest.add('empty string id, test for false', function (test) {
    test.isFalse(webix.proxy.meteor.idHelper.recordHasObjectID(collectionMapWithObjectIDs, ''), 'empty collection');
});

