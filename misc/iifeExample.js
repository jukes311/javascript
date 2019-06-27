var userName = "Bill";

(function (name) {

    function display(name)
    {
        console.log("MyScript2.js: " + name);
    }

    display(name);
})(userName);