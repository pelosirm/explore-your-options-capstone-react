import * as actions from '../actions';
import * as user from '../actions/user';
import * as saveData from '../actions/save-data';
import * as message from '../actions/display-message';
import * as savedInfo from '../actions/saved-info';
import * as compare from '../actions/compare';

const initialState = {
    searchProgramInput: [],
    searchRegionInput: [],
    searchStateInput: [],
    searchCareerInput: [],
    searchCareerStateInput: [],
    searchCareerResults: {},
    user: '',
    isAuthenticated: false,
    savedCareer: false,
    message: '',
    userSavedData: [],
    searchCollegeResults: [],
    collegeDetail: {},
    degreeValue: '',
    compareResults: [], 
    loading: ''

}

export const exploreReducer = (state = initialState, action) => {

        //user logins 

        if (action.type === user.CREATE_USER_SUCCESS || action.type === user.LOGIN_USER_SUCCESS) {
            return Object.assign({}, state, {
                user: action.username,
                isAuthenticated: true
            })
        } else if (action.type === user.CREATE_USER_ERROR || action.type === user.LOGIN_USER_ERROR){
            return Object.assign({}, state, {
                isAuthenticated: false
            })
        } 

        // display messages 
        else if (action.type === message.DISPLAY_MESSAGE) {
            console.log(message.message)
            return Object.assign({}, state, {
                message: action.message
            })
        } else if (action.type === message.HIDE_DISPLAY_MESSAGE) {
            return Object.assign({}, state, {
                message: ''
            })
        } 

        //loading gif updates

        else if (action.type === message.LOADING_TRUE){
            return Object.assign({},state,{
                loading: true 
            })
        } else if (action.type === message.LOADING_FALSE){
            return Object.assign({},state,{
                loading:false
            })
        }

        //set input values for form dropdowns

         else if (action.type === actions.GET_COLLEGE_INPUT) {
            const output = Object.assign({}, state, {
                searchProgramInput: action.results[0],
                searchStateInput: action.results[1],
                searchRegionInput: action.results[2]
            })
            return output;
        } else if (action.type === actions.GET_CAREER_INPUT) {
            return Object.assign({}, state, {
                searchCareerInput: action.results[0],
                searchCareerStateInput: action.results[1]
            })
        } 

        //search for career

        else if (action.type === actions.CAREER_QUERY_SUCCESS) {
            console.log(action.results)
            if (!action.results[1]) {
                return Object.assign({}, state, {
                    searchCareerResults: {
                        career: action.results[0].OCC_TITLE,
                        state: action.state,
                        nat_a_median: action.results[0].NAT_A_MEDIAN,
                        st_a_median: 'No Data',
                        education: action.results[0].EDUCATION,
                        experience: action.results[0].WORK_EXPERIENCE
                    }
                })
            } else {
                return Object.assign({}, state, {
                    searchCareerResults: {
                        career: action.results[0].OCC_TITLE,
                        state: action.results[1].STATE,
                        nat_a_median: action.results[0].NAT_A_MEDIAN,
                        st_a_median: action.results[1].A_MEDIAN,
                        education: action.results[0].EDUCATION,
                        experience: action.results[0].WORK_EXPERIENCE

                    }
                })
              }  
            } else if (action.type === saveData.SAVE_CAREER_SUCCESS) {
                return Object.assign({}, state, {
                    savedCareer: true
                })
            } 

        //search for college and format details
        else if (action.type === actions.COLLEGE_QUERY_SUCCESS) {

                return Object.assign({}, state, {
                    searchCollegeResults: action.results
                })

            } else if (action.type === actions.SAVE_DEGREE_VALUE) {
                return Object.assign({}, state, {
                    degreeValue: action.degree
                })
            } else if (action.type === actions.COLLEGE_DETAIL_QUERY_SUCCESS) {
                let college = action.results
                let tags = []
                let speciality = []

                tags.push(college.CONTROL)

                //interate through tags

                if (college.RELAFFIL !== 'NULL') {
                    tags.push(college.RELAFFIL)
                }

                if (college.HBCU === 1) {
                    tags.push('Historically Black Colleges')
                }

                if (college.PBI === 1) {
                    tags.push('Predominantly Black Institution')
                }

                if (college.ANNHI === 1) {
                    tags.push('Alaska Native Native Hawaiian serving institution')
                }

                if (college.TRIBAL === 1) {
                    tags.push('tribal college and university')
                }

                if (college.AANAPII === 1) {
                    tags.push('Asian American Native American Pacific Islander-serving institution')
                }

                if (college.HSI === 1) {
                    tags.push('Hispanic-serving institution')
                }

                if (college.NANTI === 1) {
                    tags.push('Native American non-tribal institution')
                }

                if (college.MENONLY === 1) {
                    tags.push('Men Only')
                }

                if (college.WOMENONLY === 1) {
                    tags.push('Women Only')
                }


                for (let prop in college) {
                    if (prop.match(/01/)) {
                        speciality.push([prop.slice(2), (Math.round(college[prop] * 100))])
                    }

                }
                //arrange specialties by popularity
                speciality.sort(function(a, b) {
                    return b[1] - a[1]
                })

                college.tags = tags
                college.speciality = speciality

                return Object.assign({}, state, {
                    collegeDetail: college
                })
            }
            //compare data
            else if (action.type === compare.GET_COMPARE_DATA_SUCCESS) {

                let calculationData = {}
                let results = action.results

                if(results[0][0]["st_a_median"] === 'No data' || results[0][0]["st_a_median"] === ''){
                    let salary = results[0][0]['nat_a_median'].replace(',','')
                    calculationData.salary = parseInt(salary,10)
                } else {
                    let salaryNat = results[0][0]['st_a_median'].replace(',','')
                    calculationData.salary = parseInt(salaryNat,10)
                }

                let interval;
                if(results[1][0]['HIGHDEG'] === 2){
                    interval = 2
                } else {
                    interval = 4
                }

                calculationData.ROI = ((calculationData.salary * 20) - 827136 - (results[1][0]['NPT4'] * interval))
                calculationData.career = results[0][0]['career']
                calculationData.college = results[1][0]['INSTNM']

                console.log(calculationData)

                return Object.assign({}, state, {
                    compareResults: calculationData
                })
            } 

            //get user saved data
            else if (action.type === savedInfo.GET_USER_DATA_SUCCESS) {
                return Object.assign({}, state, {
                    userSavedData: action.results
                })
            } 

            //logout user
            else if (action.type === user.LOGOUT_USER) {
                return Object.assign({}, state, {
                    user: '',
                    isAuthenticated: false
                })
            }
            return state;

        }