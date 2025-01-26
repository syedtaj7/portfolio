/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Revolutionizing Wireless Communication: Advanced Array Design of RIS for Anhanced performance in 5g and 6g Networks",
    authors:
      "Dr Nazeerunnisa, Syed Tajuddin, Mohammed Ameer, Faariq Siddiqui, Mohd Samrein Erum",
    conferences:
      "In the journey to publish a paper",
    researchYr: 2025,
    citebox: "popup1",
    image: "assets/images/research-page/ris.png",
    citation: {
      vancouver:
        "Dr Nazeerunnisa, Syed Tajuddin, Mohammed Ameer, Faariq Siddiqui, Mohd Samrein Erum. Revolutionizing Wireless Communication: Advanced Array Design of RIS for Anhanced performance in 5g and 6g Networks. In the journey to publish a paper 2025.",
    },
    abstract:
      "Will be Published after the paper is published",
    absbox: "absPopup1",
  },

];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
