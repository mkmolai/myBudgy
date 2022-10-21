Logic to get a random number

API CALL returning images ➤
            ⬇︎
We want this image to be different every time the user clicks a button
            ⬇︎
API will have a spot in the URL where a number is put to get the image that occupies that URL
⬇︎

E.G, https://www.myownmemeimagegenerator/image/{id}

⬇︎

To get random number ➜ 

🤔HOW DO YOU KNOW HOW DEEP YOUR REQUESTED DATA IS EMBEDDED?

<input type="text"
       name="elementName"
       plav="placeholder"
       value="this.state.elementName"
       onChange=()
/>

handleGenerate()
{
    //here we want to manipulate our current memeImages state so that it only holds one image at a time
    setState({memeImages: prevState.url})
}

★ DO CODING CHALLENGES TO HELP WITH YOUR PROBLEM SOLVING ☆

useRef is a lot like useState 
    it preserves a value
    does NOT trigger a rerender
    used to target DOM/node elements
    



