import { checkForName } from '../js/nameChecker';
async function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    checkForName(formText)

    console.log("::: Form Submitted :::")
    // fetch('http://localhost:8080/test')
    // .then(res => res.json())
    // .then(function(res) {
    //     document.getElementById('results').innerHTML = res.message
    // })

    const formdata = new FormData();
formdata.append("key", "faeb3a5e8a0a3ce2a620fd964d308f12");
formdata.append("txt", "YOUR TEXT HERE");
formdata.append("lang", "auto");




    const response = await fetch("http://localhost:8081/submit1", {
        method: "POST",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({formText:formText}),
      });
    
      try {
        const newData = await response.JSON();
        console.log(newData);
        return newData;
      } catch (error) {
        console.log("error", error);
      }
}

export { handleSubmit }
