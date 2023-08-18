
import { View, ScrollView, SafeAreaView } from 'react-native'
// import  {Stack} from 'expo-router'
import Wallet from '../components/pages/Wallet'
import Stats from '../components/pages/Stats'
import Actions from '../components/pages/Actions'
import Footer from '../components/pages/Footer'
import Header from '../components/pages/Header'


const Home = () => {
    return(
    <SafeAreaView  className='flex bg-white'>
        
        <ScrollView showsVerticalScrollIndicator= {false}>
            <View >
                <Header />
                <Wallet />
                <Stats />
                <Actions />                
                <Footer />
            </View>
        </ScrollView>
    </SafeAreaView>
    )

}


export default Home