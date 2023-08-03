import './QuestionQuiz.modules.css'

const QuestionQuiz = ({statement, options}) => {

    return (
        <div className='question_quiz'>

            <div className='statement'>
                {statement}
            </div>

            <div className='answers_section'>

            {options.map((option) => {
                return (
                    <div className='answer_box'>
                        <input type="checkbox" className='custom-checkbox' />
                        <span className='text_answer'>
                            {option}
                        </span>
                    </div>
                );
            })}

            </div>

            <hr className='divider' />

            <div className='quizSection_bottomBar'>

                <div className='likes_section'>

                    <div className='like_button'>
                        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.5 6.66671H12.2417L13.0333 2.85837L13.0583 2.59171C13.0583 2.25004 12.9167 1.93337 12.6917 1.70837L11.8083 0.833374L6.325 6.32504C6.01666 6.62504 5.83333 7.04171 5.83333 7.50004V15.8334C5.83333 16.75 6.58333 17.5 7.5 17.5H15C15.6917 17.5 16.2833 17.0834 16.5333 16.4834L19.05 10.6084C19.125 10.4167 19.1667 10.2167 19.1667 10V8.33337C19.1667 7.41671 18.4167 6.66671 17.5 6.66671ZM17.5 10L15 15.8334H7.5V7.50004L11.1167 3.88337L10.1917 8.33337H17.5V10ZM0.833328 7.50004H4.16666V17.5H0.833328V7.50004Z" fill="black"/>
                        </svg>
                    </div>

                    <div className='dislike_button'>
                        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.5 0.5H5.00001C4.30834 0.5 3.71668 0.916666 3.46668 1.51667L0.95001 7.39167C0.87501 7.58333 0.833344 7.78333 0.833344 8V9.66667C0.833344 10.5833 1.58334 11.3333 2.50001 11.3333H7.75834L6.96668 15.1417L6.94168 15.4083C6.94168 15.75 7.08334 16.0667 7.30834 16.2917L8.19168 17.1667L13.675 11.675C13.9833 11.375 14.1667 10.9583 14.1667 10.5V2.16667C14.1667 1.25 13.4167 0.5 12.5 0.5ZM12.5 10.5L8.88334 14.1167L9.80834 9.66667H2.50001V8L5.00001 2.16667H12.5V10.5ZM15.8333 0.5H19.1667V10.5H15.8333V0.5Z" fill="black"/>
                        </svg>
                    </div>

                </div>

                <div className='modify_question_section'>

                    <div className='edit_button'>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.5 12.375V15.5H3.625L12.8417 6.28334L9.71667 3.15834L0.5 12.375ZM15.2583 3.86667C15.5833 3.54167 15.5833 3.01667 15.2583 2.69167L13.3083 0.741675C12.9833 0.416675 12.4583 0.416675 12.1333 0.741675L10.6083 2.26667L13.7333 5.39167L15.2583 3.86667Z" fill="black"/>
                        </svg>
                    </div>

                    <div className='delete_button'>
                        <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.33329 5.5V13.8333H2.66663V5.5H9.33329ZM8.08329 0.5H3.91663L3.08329 1.33333H0.166626V3H11.8333V1.33333H8.91663L8.08329 0.5ZM11 3.83333H0.999959V13.8333C0.999959 14.75 1.74996 15.5 2.66663 15.5H9.33329C10.25 15.5 11 14.75 11 13.8333V3.83333Z" fill="black"/>
                        </svg>
                    </div>

                </div>
                
            </div>

        </div>
    )
}

export default QuestionQuiz 