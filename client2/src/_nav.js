export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
    
    {
      name: 'Admins',
      url: '/admin',
      icon: 'icon-user',
    },

    {
      name: 'Users',
      url: '/users',
      icon: 'icon-people',
      children: [
        {
          name: 'Teachers',
          url: '/user/teacher',
          icon: 'icon-people',
        },
        {
          name: 'Students',
          url: '/user/student',
          icon: 'icon-people',
        },
        {
          name: 'Parents',
          url: '/user/parent',
          icon: 'icon-people',
        },
        {
          name: 'Staffs',
          url: '/user/staff',
          icon: 'icon-people',
        }
      ]
    },

    {
      title: true,
      name: 'Academic',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}      // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Admission',
      url: '/academic/admission',
      icon: 'icon-people',
    },
    {
      name: 'Classes',
      url: '/academic/class',
      icon: 'icon-people',
    },
    {
      name: 'Subjects',
      url: '/academic/subject',
      icon: 'icon-people',
    },
    {
      name: 'Grade Level',
      url: '/academic/grade-level',
      icon: 'icon-people',
    },
    {
      name: 'Exam',
      url: '/academic/exam',
      icon: 'icon-people',
    },
    {
      name: 'Attendance',
      url: '/academic/attendance',
      icon: 'icon-people',
    },
    {
      name: 'Marksheet',
      url: '/academic/marksheet',
      icon: 'icon-people',
    },
    {
      name: 'Schedules',
      url: '/schedule',
      icon: 'icon-people',
      children: [
        {
          name: 'Class Schedule',
          url: '/schedule/class',
          icon: 'icon-people',
        },
        {
          name: 'Exam Schedule',
          url: '/schedule/exam',
          icon: 'icon-people',
        },
      ]
    },
    {
      name: 'Result',
      url: '/academic/result',
      icon: 'icon-people',
    },

    

    {
      divider: true,
    },

    {
      title: true,
      name: 'Extras',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}      // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Facilities',
      url: '/facility',
      icon: 'icon-people',
      children: [
        {
          name: 'Library',
          url: '/facility/library',
          icon: 'icon-people',
        },
        {
          name: 'Transport',
          url: '/facility/transport',
          icon: 'icon-people',
        },
      ]
    },
    {
      name: 'News & Events',
      url: '/news-events',
      icon: 'icon-people',
    },
    {
      name: 'Calendar',
      url: '/calendar',
      icon: 'icon-people',
    },
    {
      name: 'Settings',
      url: '/setting',
      icon: 'icon-people',
    },



  
    {
      name: 'Disabled',
      url: '/dashboard',
      icon: 'icon-ban',
      attributes: { disabled: true },
    },
    {
      name: 'Messaging',
      url: '/',
      icon: 'icon-cloud-download',
      class: 'mt-auto',
      variant: 'success',
      attributes: { target: '_blank', rel: "noopener" },
    },
    {
      name: 'Feedback',
      url: '/',
      icon: 'icon-layers',
      variant: 'danger',
      attributes: { target: '_blank', rel: "noopener" },
    },
  ],
};
