
class DataCertificatesTitles:

    DATA_CERTIFICATES_ADVANCED = {
        1: "Average Typist",
        2: "Certified Typist",
        3: "Proficient Typist",
        4: "Advanced Typist",
        5: "Expert Typist",
        6: "Master Typist",
        7: "Elite Typist",
        8: "Distinguished Typist",
        9: "Virtuoso Typist",
    }

    DATA_CERTIFICATES_MASTER = {
        1: "Grandmaster Typist",
        2: "Pinnacle Typist",
        3: "Legend Typist",
    }

    DATA_CERTIFICATES_WORLD_RECORD = {
        1: "Hall of Fame Typist",
        2: "World-Class Typist",
        3: "Record-Breaking Typist",
    }

    certification_id = 1

    def __init__(self, certification_id):
        DataCertificatesTitles.certification_id = certification_id

    @classmethod
    def getCertificateTtle(cls,type) -> str:
        if type == "master":
            return cls.getdata(
                source=cls.DATA_CERTIFICATES_MASTER,
            )

        elif type == "world_record":
            return cls.getdata(
                source=cls.DATA_CERTIFICATES_WORLD_RECORD,
            )
        else:
            return cls.getdata(
                source=cls.DATA_CERTIFICATES_ADVANCED,
            )


    @classmethod
    def getdata(cls,source: dict[int, str]) -> str: 
        title_certification = ""
        title_certification = source.get(int(cls.certification_id))

        return title_certification if title_certification != None else source[1]