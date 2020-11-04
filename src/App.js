import {useState} from 'react';
import PhoneInput from 'react-phone-number-input';

  function App() {
    const [value, setValue] = useState('');
    return (
      <div className="App">
        <PhoneInput
          international
          countryCallingCodeEditable={false}
          defaultCountry="RU"
          value={value}
          onChange={setValue}
        />
      </div>
    );
  }

export default App;
