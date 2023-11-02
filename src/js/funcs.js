/*creates an observer object to be used in the <fade-in-view> component and other components that need to be completely in the viewport*/
class observer{
    constructor(){
        this.options = {
            root: null,
            threshold: 0.5
        };
        this.callback = function(entries,observer){
            entries.forEach((entry) => {
                console.log(entry.isIntersecting);
            });}
        this = new IntersectionObserver(callback, options);
    }  
    target(element){ 
        this.observe(element);
}
}
observe = new observer();