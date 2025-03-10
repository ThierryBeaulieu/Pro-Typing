from pathlib import Path
import random

from certifications_library.certifications_titles import DataCertificatesTitles

from tinydb import TinyDB, Query, where

folder = Path(__file__).parent / "certifications_library"

# folder = os.path.realpath(os.path.join(os.path.dirname(os.path.relpath(__file__)), "certifications_library"))


class GetCertificate:
    

    def __init__(self, type_level, title_certification):
        self.title_certification = title_certification if type_level != None else 1
        self.type_level = type_level if type_level != None else "advanced"
    
    def getCertificateSentence(self) -> str:
        real_folder = folder / self.type_level
        file_to_open = ""

        if real_folder.is_dir():
            certificate_title = DataCertificatesTitles(self.title_certification).getCertificateTtle(self.type_level)

            for f in real_folder.iterdir():
                if f.is_file():
                    if f.name.find(certificate_title.lower().split(" ")[0]) != -1:
                        file_to_open = f
                        break
                
            return GetCertificate.getData(file_to_open=file_to_open) 

        return ""


    @staticmethod
    def getData(file_to_open="", table="anglais") -> str:
        file_to_open = Path(file_to_open)
        if file_to_open.is_file():

            tiny = TinyDB(file_to_open, indent=4)
            table = tiny.table(table)
            sentence = table.search(where("sentence") != "" )

            if sentence:
                return sentence[random.randint(0,len(sentence)-1)]
        
        return ""
    
    
    

    def insertData():
        tiny = TinyDB(folder / "advanced" / "average_typis.json", indent=4)

        table = tiny.table("anglais")

        table.insert_multiple([
            {
                "setence": "Typing is an essential skill in the modern world. It allows people to work efficiently and communicate faster.",
            },
                {"setence": "Practicing daily can help improve speed and accuracy."},
                {"setence": "It is important to maintain proper posture and keep fingers on the home row for better control."},
                {"setence": "Errors are natural, but with patience and repetition, accuracy improves over time."},
                {"setence": "Consistent practice with typing exercises will enhance muscle memory and reduce reliance on looking at the keyboard."}
        ])