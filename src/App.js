import {useState} from 'react';
import PhoneInput from 'react-phone-number-input';

  function App() {
    const [value, setValue] = useState('');
    return (
      <div className="App">
        <PhoneInput
          international
          countryCallingCodeEditable={false}
          defaultCountry="US"
          value={value}
          onChange={setValue}
        />
      </div>
    );
  }

export default App;
