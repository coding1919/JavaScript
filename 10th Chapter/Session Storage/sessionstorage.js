// sessionStorage used less than localStorage. Properties and methods are same as localStorage but 

// The sessionStorage exists only within the current browser tab. Another tab with same page will have a different storage

// The data survives page refresh, but not closing/opening the tab

// used same property as before

// Storage Event

// When the data gets updated in localStorage or sessionStorage event triggers with these properties

// key - the key
// old value - previous value
// new value - new value
// url - page url
// storagearea - local or sessionStorage

// we can listen the onstorage event of window which is triggered when updates are made to the same storage from other documents

window.onstorage = (e)=>{
    alert("changed")
    console.log(e)
}