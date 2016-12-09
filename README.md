# jquery-bacon-ipsum
jQuery Plugin for generating Bacon Ipsum

You can reference the plugin from our server or download it and use it locally.

http://cdn.baconipsum.com/api/jquery-BaconIpsum.js

The easiest way to use it is just to call the method with no options.
```
$('#placeholder').BaconIpsum();
```

You can also pass in options.
```
$('#placeholder').BaconIpsum({ type:'all-meat', paras:5, start_with_lorem:false });
```
```
$('#placeholder').BaconIpsum({ type:'meat-and-filler', sentences:1, start_with_lorem:true });
```

* **type**: either 'all-meat' or 'meat-and-filler'
* **paras**: number of paragraphs
* **sentences**: number of sentences (this overrides paragraphs)
* **start_with_lorem**: true or false to start the text with 'Bacon ipsum dolor sit amet'
* **no_tags**: true or false, pass true to not wrap the return value in `<p>` tags
