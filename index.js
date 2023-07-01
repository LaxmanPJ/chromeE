
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

console.log(ulEl)
const lead = JSON.parse(localStorage.getItem("myLeads"))

if(lead){
    myLeads = lead;
    render(myLeads);
}
function render(leads){
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
        // / Wrap the lead in an anchor tag (<a>) inside the <li>
            // Can you make the link open in a new tab? 
        // listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
        listItems += `<li> 
                        <a target='_blank' href='${leads[i]}'>
                        ${leads[i]}
                        </a>
                        </li>
                        `
    }
    ulEl.innerHTML = listItems
}
deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})
const tabs = [
    {url: "https://www.linkedin.com/in/per-harald-borgen/"}
]
tabBtn.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
})
inputBtn.addEventListener("click",function(){
    // console.log("clickded two times")
    myLeads.push(inputEl.value)
    // clear out the input field
    inputEl.value = ""

    //save to local storage
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    

    render(myLeads)
}
) 
