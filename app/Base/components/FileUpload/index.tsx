import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
// import styles from './styles.module.scss';
// import { Switch } from '@togglecorp/toggle-ui';
// import { LanguageContext } from '../../Context';
// import { Language } from '../../types';
import { Link } from 'react-router-dom';

type FileUploadProps = {
    name: string,
    multiple: boolean,
    onFileOpen?: (file: File) => void,
    error?: string,
}

export default function FileUpload(props: FileUploadProps) {

    const { name, multiple, onFileOpen, error } = props;

    // const lang = useContext(LanguageContext);

    const [isEn, setIsEn] = useState<boolean>(true);

    const [err, setErr] = useState<string>("");

    const handleSelectLang = () => {
        // setLang((!isEn) ? Language.en : Language.ar);
        setIsEn(!isEn);
    }

    const handleFileChange = React.useCallback((event: ChangeEvent<HTMLInputElement>) => {
        if (onFileOpen && event.target && event.target.files) {
            onFileOpen(event.target.files[0]);
        }
    }, [onFileOpen]);

    // useEffect(() => {
    //     setIsEn(lang === Language.en);
    //     if(error && error !== "") setErr(error);
    // }, [lang, error]);

    // return (
    //     // <div className={styles.center}>
    //     //     {error &&
    //     //         <>
    //     //             <div className={styles.error}>
    //     //                 {error}
    //     //             </div>
    //     //         </>
    //     //     }
    //     //     <div className={styles.fileUploadWrapper}>
    //     //         <button className={styles.uploadbtn}>Upload a file</button>
    //     //         <input type="file" name={name} onChange={handleFileChange} multiple={multiple} />
    //     //     </div>
    //     //     <div className={styles.link}>
    //     //         <a
    //     //             href="https://github.com/toggle-corp/jips/blob/develop-main/src/Sample%20data.xlsx?raw=true"
    //     //         >
    //     //             Download Sample
    //     //         </a>
    //     //     </div>
    //     //     <h4>Select a language</h4>
    //     //     <Switch
    //     //         name="language"
    //     //         label={(isEn) ? "English" : "Arabic"}
    //     //         onChange={handleSelectLang}
    //     //         value={isEn}
    //     //     />
    //     // </div>
    // );
}