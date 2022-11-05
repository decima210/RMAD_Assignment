import React, {useState} from 'react';
import styles from './styles/FinalProjStyles';
import {Text, SafeAreaView, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

// const data = [
//   {label: 'Item 1', value: '1'},
//   {label: 'Item 2', value: '2'},
//   {label: 'Item 3', value: '3'},
//   {label: 'Item 4', value: '4'},
//   {label: 'Item 5', value: '5'},
//   {label: 'Item 6', value: '6'},
//   {label: 'Item 7', value: '7'},
//   {label: 'Item 8', value: '8'},
// ];
// export default function ExistingPassengerScr() {
//   const [value, setValue] = useState(null);
//   const [isFocus, setIsFocus] = useState(false);

//   const renderLabel = () => {
//     if (value || isFocus) {
//       return (
//         // eslint-disable-next-line react-native/no-inline-styles
//         <Text style={[styles.label, isFocus && {color: 'blue'}]}>Passport</Text>
//       );
//     }
//     return null;
//   };
//   return (
//     <>
//       <SafeAreaView>
//         <Text style={styles.txtTopic}>Manusath Foreign Employment</Text>
//         <Text> Passport:</Text>
//         <Text> Enter Passport Number:</Text>
//         <View style={styles.container}>
//           {renderLabel()}
//           <Dropdown
//             // eslint-disable-next-line react-native/no-inline-styles
//             style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
//             placeholderStyle={styles.placeholderStyle}
//             selectedTextStyle={styles.selectedTextStyle}
//             inputSearchStyle={styles.inputSearchStyle}
//             iconStyle={styles.iconStyle}
//             data={data}
//             search
//             maxHeight={300}
//             labelField="label"
//             valueField="value"
//             placeholder={!isFocus ? 'Select item' : '...'}
//             searchPlaceholder="Search..."
//             value={value}
//             onFocus={() => setIsFocus(true)}
//             onBlur={() => setIsFocus(false)}
//             onChange={item => {
//               setValue(item.value);
//               setIsFocus(false);
//             }}
//           />
//         </View>
//       </SafeAreaView>
//     </>
//   );
// }
