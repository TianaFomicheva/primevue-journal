import { render, screen} from '@testing-library/vue'
import InputWrapper from './InputWrapper.vue'
import PrimeVue from "primevue/config";

test('render header component', async () =>{
  
  const { debug } = render(InputWrapper, {
    global:{
      plugins: [PrimeVue]
    },
    
  });
  
  
  
})