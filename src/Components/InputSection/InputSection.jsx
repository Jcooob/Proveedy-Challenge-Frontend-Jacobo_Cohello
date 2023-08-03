import './InputSection.modules.css'
import { Link } from "react-router-dom";

const InputSection = ({generate}) => {

    return (

        <div className='inputSection'>

            <div className='create_new_quiz'>
                {generate ? (
                    <div> Edit quiz</div>
                ) : <div> Create a new quiz</div>}
                
            </div>

            <div className='try_example'>
                Try an example:&nbsp;
                <span className='option_example'>
                    Gandhi
                </span>
                ,&nbsp;
                <span className='option_example'>
                    Battle of Hastings
                </span>
                , and&nbsp;
                <span className='option_example'>
                    technical documentation
                </span>
                .
            </div>

            <div className='options_menu'>

                <div className='option_selected'>
                    Test
                </div>

                <div className='option'>
                    Topic
                </div>

                <div className='option'>
                    URL
                </div>

                <div className='option'>
                    Uploads
                    <div className='icon_option'>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 3.1875C12 3.70523 11.6269 4.125 11.1667 4.125C11.1615 4.125 11.1572 4.12203 11.152 4.12194L10.0995 10.6352C10.0417 10.9898 9.76666 11.25 9.44375 11.25H2.55625C2.23416 11.25 1.95791 10.9908 1.90041 10.6343L0.848122 4.12266C0.842914 4.12266 0.838539 4.125 0.81458 4.125C0.354372 4.125 -0.0187531 3.70523 -0.0187531 3.1875C-0.0187531 2.66977 0.373122 2.25 0.81458 2.25C1.25604 2.25 1.64791 2.66977 1.64791 3.1875C1.64791 3.39839 1.57456 3.58336 1.47006 3.73992L3.33735 5.42039C3.66881 5.71875 4.16027 5.5972 4.35006 5.17008L5.55006 2.47008C5.31458 2.30484 5.14791 2.02359 5.14791 1.6875C5.14791 1.16977 5.53958 0.75 6 0.75C6.46041 0.75 6.81458 1.16977 6.81458 1.6875C6.81458 2.02359 6.64868 2.30484 6.4125 2.47031L7.6125 5.17031C7.80231 5.59734 8.29395 5.71875 8.62521 5.42062L10.4925 3.74016C10.4062 3.58359 10.3333 3.37734 10.3333 3.1875C10.3333 2.66953 10.7062 2.25 11.1667 2.25C11.6271 2.25 12 2.66953 12 3.1875Z" fill="black"/>
                        </svg>
                    </div>
                </div>

                <div className='option'>
                    Manual
                </div>

            </div>

            <div className='text_area'>
                    Enter Your Text
                    <textarea
                        className='text_box'
                        rows='6' 
                        cols='40'
                    />
            </div>

            {generate ? (
                <div className='selector_area'> 

                    <div className='selector_column'>

                        <div className='selector'>
                            Tipo de Quiz
                            <div className='icon_selector'>
                                <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.175 0.158325L5 3.97499L8.825 0.158325L10 1.33333L5 6.33332L0 1.33333L1.175 0.158325Z" fill="black"/>
                                </svg>
                            </div>
                        </div>

                        <div className='selector'>
                            Lenguaje
                            <div className='icon_selector'>
                                <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.175 0.158325L5 3.97499L8.825 0.158325L10 1.33333L5 6.33332L0 1.33333L1.175 0.158325Z" fill="black"/>
                                </svg>
                            </div>
                        </div>

                    </div>

                    <div className='selector_column'>

                        <div className='selector'>
                            Dificultad
                            <div className='icon_selector'>
                                <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.175 0.158325L5 3.97499L8.825 0.158325L10 1.33333L5 6.33332L0 1.33333L1.175 0.158325Z" fill="black"/>
                                </svg>
                            </div>
                        </div>

                        <div className='selector'>
                            Max de Quiz
                            <div className='icon_selector'>
                                <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.175 0.158325L5 3.97499L8.825 0.158325L10 1.33333L5 6.33332L0 1.33333L1.175 0.158325Z" fill="black"/>
                                </svg>
                            </div>
                        </div>

                    </div>

                </div>

            ) : null}

            <Link to = {'/generate'} >
                <div className='generate_button'>
                    Generate
                </div>
            </Link>
            
        </div>
    )
}

export default InputSection