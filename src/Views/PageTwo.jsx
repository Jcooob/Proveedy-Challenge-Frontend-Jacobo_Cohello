import Navbar from '../Components/Navbar/Navbar'
import InputSection from '../Components/InputSection/InputSection'
import QuizSection from '../Components/QuizSection/QuizSection'
import PreferencesSection from '../Components/PreferencesSection/PreferencesSection'

const PageTwo = () => {

    return (
        <div >
            <Navbar />
            <div style={{ display: 'flex' }}>
                <InputSection generate={true}/>
                <QuizSection />
                <PreferencesSection />
            </div>
        </div>
    )
}

export default PageTwo