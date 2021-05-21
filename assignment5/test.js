var goalID = document.getElementById('goalDiv')
var assistID = document.getElementById('assistDiv')
var saveID = document.getElementById('saveDiv')
var shotID = document.getElementById('shotDiv')
var titleID = document.getElementsByClassName('javeLabel')
document.getElementsByClassName('javaLabel')[0].addEventListener('click', goalStats)
// This fuction runs when the goal stat text is clicked on. It shows the user the stats they chose.
function goalStats(){
    goalID.style.display ="block"
    assistID.style.display = "none"
    saveID.style.display = "none"
    shotID.style.display = "none"
    goalID.style.float = "right"
    goalID.style.marginTop ="-240px"
    goalID.style.marginRight ="10%"
}
document.getElementsByClassName('javaLabel')[1].addEventListener('click', assistStats)
// This fuction runs when the assist stat text is clicked on. It shows the user the stats they chose.
function assistStats(){
    assistID.style.display ="block"
    goalID.style.display = "none"
    saveID.style.display = "none"
    shotID.style.display = "none"
    assistID.style.float = "right"
    assistID.style.marginTop ="-240px"
    assistID.style.marginRight ="10%"
}
document.getElementsByClassName('javaLabel')[2].addEventListener('click', saveStats)
// This fuction runs when the save stat text is clicked on. It shows the user the stats they chose.
function saveStats(){
    saveID.style.display = "block"
    goalID.style.display ="none"
    assistID.style.display = "none"
    shotID.style.display = "none"
    saveID.style.float = "right"
    saveID.style.marginTop ="-240px"
    saveID.style.marginRight ="10%"
}
document.getElementsByClassName('javaLabel')[3].addEventListener('click', shotStats)
// This fuction runs when the shot stat text is clicked on. It shows the user the stats they chose.
function shotStats(){
    shotID.style.display = "block"
    goalID.style.display ="none"
    assistID.style.display = "none"
    saveID.style.display = "none"
    shotID.style.float = "right"
    shotID.style.marginTop ="-240px"
    shotID.style.marginRight ="10%"
}
// This function is used for the "Command Line" that I implemented.
function screenCustomization(){
    var str = document.getElementById("textId").value
    var site = document.getElementById('box')   

    var accentNav = document.getElementById('navAccent')
    var accentTitle1 = document.getElementsByTagName('h1')[0]
    var accentTitle2 = document.getElementsByTagName('h1')[1]
    var accentTitle3 = document.getElementsByTagName('h1')[2]
    var accentButton = document.getElementById('buttonId')
    var accentButton2 = document.getElementById('button2')

    var accentText1 = document.getElementById('standings')
    var accentDiv1_1 = document.getElementsByClassName('stndDiv')[0]
    var accentDiv2_1 = document.getElementsByClassName('stndDiv')[1]
    var accentDiv3_1 = document.getElementsByClassName('stndDiv')[2]
    var accentDiv4_1 = document.getElementsByClassName('stndDiv')[3]

    var accentDiv1_2 = document.getElementById('schedule')

    var accentText2 = document.getElementById('newsInfo')
    var accentDiv1_3 = document.getElementsByClassName('newsDiv')[0]
    var accentDiv2_3 = document.getElementsByClassName('newsDiv')[1]
    switch (str){
        case "Help Me":
            alert("Color Options: \n'Pink' | 'Skyblue' | 'Purple' \n\nWhat You can Access:\n 'Accent'-Header, Titles, & Footer | 'Header' | 'Title' | 'Text'-For Body Text")
            break
        case "Accent Pink":
            accentNav.style.backgroundColor = "#fb81fb"

            accentTitle1.style.color = "#fb81fb"
            accentTitle2.style.color = "#fb81fb"
            accentTitle3.style.color = "#fb81fb"

            accentButton.style.backgroundColor = "#fb81fb"
            accentButton2.style.backgroundColor = "#fb81fb"
            break
        case "Header Pink": accentNav.style.backgroundColor = "#fb81fb"
            break
        case "Title Pink":
            accentTitle1.style.color = "#fb81fb"
            accentTitle2.style.color = "#fb81fb"
            accentTitle3.style.color = "#fb81fb"
            break
        case "Text Pink":
            accentText1.style.color = "#fb81fb"
            accentDiv1_1.style.backgroundColor = "black"
            accentDiv1_1.style.border = "3px solid white"
            accentDiv2_1.style.backgroundColor = "black"
            accentDiv2_1.style.border = "3px solid white"
            accentDiv3_1.style.backgroundColor = "black"
            accentDiv3_1.style.border = "3px solid white"
            accentDiv4_1.style.backgroundColor = "black"
            accentDiv4_1.style.border = "3px solid white"

            accentDiv1_2.style.color = "#fb81fb"
            accentDiv1_2.style.backgroundColor = "black"
            accentDiv1_2.style.border = "3px solid white"

            accentText2.style.color = "#fb81fb"
            accentDiv1_3.style.backgroundColor = "black"
            accentDiv1_3.style.border = "3px solid white"
            accentDiv2_3.style.backgroundColor = "black"
            accentDiv2_3.style.border = "3px solid white"
            break
            /* BREAK FOR NEXT COLOR */
            case "Accent Skyblue":
                accentNav.style.backgroundColor = "#8febf7"
                
                accentTitle1.style.color = "#8febf7"
                accentTitle2.style.color = "#8febf7"
                accentTitle3.style.color = "#8febf7"

                accentButton.style.backgroundColor = "#8febf7"
                accentButton2.style.backgroundColor = "#8febf7"
                break
            case "Header Skyblue": accentNav.style.backgroundColor = "#8febf7"
                break
            case "Title Skyblue":
                accentTitle1.style.color = "#8febf7"
                accentTitle2.style.color = "#8febf7"
                accentTitle3.style.color = "#8febf7"
                break
            case "Text Skyblue":
                accentText1.style.color = "#8febf7"
                accentDiv1_1.style.backgroundColor = "black"
                accentDiv1_1.style.border = "3px solid white"
                accentDiv2_1.style.backgroundColor = "black"
                accentDiv2_1.style.border = "3px solid white"
                accentDiv3_1.style.backgroundColor = "black"
                accentDiv3_1.style.border = "3px solid white"
                accentDiv4_1.style.backgroundColor = "black"
                accentDiv4_1.style.border = "3px solid white"
    
                accentDiv1_2.style.color = "#8febf7"
                accentDiv1_2.style.backgroundColor = "black"
                accentDiv1_2.style.border = "3px solid white"
    
                accentText2.style.color = "#8febf7"
                accentDiv1_3.style.backgroundColor = "black"
                accentDiv1_3.style.border = "3px solid white"
                accentDiv2_3.style.backgroundColor = "black"
                accentDiv2_3.style.border = "3px solid white"
                break
            /* BREAK FOR NEXT COLOR */
            case "Accent Purple":
                accentNav.style.backgroundColor = "#ad8ff7"
                
                accentTitle1.style.color = "#ad8ff7"
                accentTitle2.style.color = "#ad8ff7"
                accentTitle3.style.color = "#ad8ff7"

                accentButton.style.backgroundColor = "#ad8ff7"
                accentButton2.style.backgroundColor = "#ad8ff7"
                break
            case "Header Purple": accentNav.style.backgroundColor = "#ad8ff7"
                break
            case "Title Purple":
                accentTitle1.style.color = "#ad8ff7"
                accentTitle2.style.color = "#ad8ff7"
                accentTitle3.style.color = "#ad8ff7"
                break
            case "Text Purple":
                accentText1.style.color = "#ad8ff7"
                accentDiv1_1.style.backgroundColor = "black"
                accentDiv1_1.style.border = "3px solid white"
                accentDiv2_1.style.backgroundColor = "black"
                accentDiv2_1.style.border = "3px solid white"
                accentDiv3_1.style.backgroundColor = "black"
                accentDiv3_1.style.border = "3px solid white"
                accentDiv4_1.style.backgroundColor = "black"
                accentDiv4_1.style.border = "3px solid white"
    
                accentDiv1_2.style.color = "#ad8ff7"
                accentDiv1_2.style.backgroundColor = "black"
                accentDiv1_2.style.border = "3px solid white"
    
                accentText2.style.color = "#ad8ff7"
                accentDiv1_3.style.backgroundColor = "black"
                accentDiv1_3.style.border = "3px solid white"
                accentDiv2_3.style.backgroundColor = "black"
                accentDiv2_3.style.border = "3px solid white"
                break
        default:
            alert("Enter a valid code please!")
    }
}