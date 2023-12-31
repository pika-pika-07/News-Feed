import { checkForName } from '../js/nameChecker';
function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    if( checkForName(formText) ){
        runApi("http://localhost:8081/submit1",formText)
        .then((result) => {
            updateUI(result)
        })
    }
    else{
        alert("Not Possible")
    }

  

   
}

const runApi = async (url,formText) => {
    const response = await fetch(url, {
        method: "POST",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({formText:formText}),
      });
    
      try {
        const data = await response.json();
        console.log("Here backkkkkkk",data)
        return data;
      } catch (error) {
        console.log("error", error);
      }
}

const updateUI = async (result) => {
    console.log("Result is",result)
    document.getElementById("subjectivity").innerHTML = `Subjectivity: ${result.subjectivity}`;
    document.getElementById("confidence").innerHTML = `Confidence ${result.confidence}`;
    document.getElementById("agreement").innerHTML = `Agreement: ${result.agreement}`;
    document.getElementById("irony").innerHTML = `Irony: ${result.irony}`;
    document.getElementById("score_tag").innerHTML = `Score Tag ${result.score_tag}`;
    
  
    
}

export { handleSubmit }
