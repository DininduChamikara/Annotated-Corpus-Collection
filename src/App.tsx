import { useState } from "react";
import { Tooltip } from "react-tooltip";
import anotatedDataSetSinhala from "./data/sinhala_annotation.json";
import anotatedDataSetEnglish from "./data/english_annotation.json";
import CodeBox from "./components/CodeBox";

function App() {
  const sinhalaJSON = JSON.stringify(anotatedDataSetSinhala);
  const englishJSON = JSON.stringify(anotatedDataSetEnglish);

  const [dataset, setDataset] = useState(sinhalaJSON);

  const handleOnChangeLanguage = (event: any) => {
    const language = event.target.value;
    if (language === "sinhala") {
      setDataset(sinhalaJSON);
    } else if (language === "english") {
      setDataset(englishJSON);
    }
  };

  const handleDownloadDataset = (fileType: string) => {
    let blob: Blob;  
    const fileName = `dataset.${fileType}`;

    if (fileType === "json") {
      blob = new Blob([dataset], { type: "application/json" });
    }
    //for csv file 
    else if (fileType === "csv") {
      const csvData = convertToCSV(JSON.parse(dataset));
      blob = new Blob([csvData], { type: "text/csv" });
    }
    //for txt file
    else if (fileType === "txt") {
      const txtData = convertToTXT(JSON.parse(dataset));
      blob = new Blob([txtData], { type: "text/plain" });
    } 
    else {
      return; 
    }

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
  //function to convert the file to csv
  const convertToCSV = (data: any) => {
    const csvRows = [];
    const headers = ['Text', 'Entities'];
    csvRows.push(headers.join(','));
  
    data.annotations.forEach((annotation: any) => {
      const text = annotation[0].replace(/,/g, ''); 
      const entities = JSON.stringify(annotation[1].entities);
      csvRows.push(`${text},${entities}`);
    });
  
    return csvRows.join('\n');
  };
  //function to convert the file to txt
  const convertToTXT = (data: any) => {
    return data.annotations.map((annotation: any) => annotation[0]).join('\n');
  };
  

  return (
    <div className="p-5 px-10">
      <div className="text-4xl font-bold text-center pt-5">
        Annotated Corpus Collection
      </div>
      <div className="text-2xl font-semibold italic text-center pb-10 text-amber-800">
        for NLP Researches
      </div>
      <div className="block sm:flex gap-5">
        <div className="w-full sm:w-1/2">
          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <div className="sm:w-1/2">
              <select
                data-tooltip-id="change-lang-tooltip"
                data-tooltip-content="Select Language Preference"
                onChange={handleOnChangeLanguage}
                className="bg-blue-500 hover:bg-blue-700 focus:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg flex items-center cursor-pointer w-full h-10 mr-2 shadow-lg hover:shadow-xl focus:shadow-xl transform hover:scale-105 focus:scale-105 transition duration-200"
              >
                <option value="sinhala">Sinhala</option>
                <option value="english">English</option>
              </select>
              <Tooltip id="change-lang-tooltip" />
            </div>
            {/* dropdown to download desired file */}
            <div className="flex space-x-4">
            <select
              data-tooltip-id="download-tooltip"
              data-tooltip-content="Select The Export Filetype"
              data-tooltip-place="bottom-start"
              onChange={(e) => handleDownloadDataset(e.target.value)}
              className="bg-blue-500 hover:bg-blue-700 focus:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg flex items-center cursor-pointer w-auto h-10 mr-2 shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-200"
            >
              <option value="">Download Dataset</option>
              <option value="json">Download JSON</option>
              <option value="csv">Download CSV</option>
              <option value="txt">Download TXT</option>
            </select>
            <Tooltip id="download-tooltip" />
          </div>


            <a
              data-tooltip-id="create-tooltip"
              data-tooltip-content="Create Custom Data"
              data-tooltip-place="bottom"
              href="https://dininduchamikara.github.io/Pre-Annotation-Objects-Generator-NER/"
              target="blank"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center cursor-pointer w-1/3 h-10 ml-2 shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-200"
            >
              Create Annotation
            </a>
            <Tooltip id="create-tooltip" />
          </div>
          <div className="pt-10 font-semibold text-2xl">About</div>
          <div className="pt-5">
            The purpose of this application is to create pre-annotated objects
            for News Article Corpus for various languages. Currently this
            application is limited to Sinhala and English languages. This
            application can be used by anyone how work with Natural Language
            Processing, Named Entity Recognition or related tasks. Currenty this
            one is used for the ongoing research that 'Sinhala Document
            Clustering using Name Entity Recognition'.
          </div>
          <div className="pt-10 font-semibold text-2xl">How it use?</div>
          <div className="py-5">
            <ol className="list-decimal list-inside">
              <li>
                Select the language you want to generate pre-annotated objects.
              </li>
              <li>
                Click on the "Generate New" button to generate a new object.
              </li>
              <li>
                Do your entity annotation with named entities. Currently this is
                limited to ["LOCATION", "PERSON", "ORGANIZATION", "DATE",
                "TIME"] these entities.
              </li>
              <li>
                Copy the generated object and paste it to the relevant file.
              </li>
            </ol>
          </div>
        </div>
        <div className="sm:w-1/2">
          <CodeBox code={dataset} />
        </div>
      </div>
    </div>
  );
}

export default App;
