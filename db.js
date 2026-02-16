


const STORAGE_KEY = 'crisis_management_db_v3';

const now = () => new Date().toISOString();

const initialData = {

  riskAssessment: null, // Stores { score: number, date: string }

  incidents: [
    {
      id: 1,
      title: 'آتش‌سوزی در انبار کالا',
      type: 'آتش‌سوزی',
      reporter: 'علی محمدی',
      status: 'جدید',
      severity: 'زیاد',
      region: '۴',
      neighborhood: 'پردیسان',
      address: 'بلوار دانشگاه، کوچه ۳',
      lat: 34.6405,
      lng: 50.8742,
      createdAt: now()
    },
    {
      id: 2,
      title: 'تصادف زنجیره‌ای',
      type: 'تصادف',
      reporter: 'زهرا حسینی',
      status: 'در حال بررسی',
      severity: 'متوسط',
      region: '۱',
      neighborhood: 'صفاییه',
      address: 'خیابان شهدا، تقاطع اول',
      lat: 34.6512,
      lng: 50.8831,
      createdAt: now()
    },
    {
      id: 3,
      title: 'ریزش دیوار خانه قدیمی',
      type: 'ریزش ساختمان',
      reporter: 'حسین کریمی',
      status: 'حل شده',
      severity: 'کم',
      region: '۲',
      neighborhood: 'باجک',
      address: 'کوچه امام رضا ۵',
      lat: 34.6321,
      lng: 50.8622,
      createdAt: now()
    },
    {
      id: 4,
      title: 'آب‌گرفتگی معبر',
      type: 'سیلاب',
      reporter: 'مریم رضایی',
      status: 'جدید',
      severity: 'متوسط',
      region: '۳',
      neighborhood: 'سالاریه',
      address: 'بلوار امین',
      lat: 34.6583,
      lng: 50.8955,
      createdAt: now()
    }
  ],

  citizens: [
    {
      id: 101,
      name: 'علی رضایی',
      status: 'safe',
      location: { lat: 34.63, lng: 50.86 },
      timestamp: now()
    },
    {
      id: 102,
      name: 'مریم احمدی',
      status: 'injured',
      location: { lat: 34.65, lng: 50.89 },
      timestamp: now()
    },
    {
      id: 103,
      name: 'رضا موسوی',
      status: 'missing',
      location: null,
      timestamp: now()
    }
  ],

  shelters: [
    {
      id: 1,
      name: 'مدرسه شهید رجایی',
      capacity: 200,
      currentOccupancy: 120,
      lat: 34.63,
      lng: 50.86,
      status: 'open'
    },
    {
      id: 2,
      name: 'سالن ورزشی تختی',
      capacity: 500,
      currentOccupancy: 350,
      lat: 34.66,
      lng: 50.89,
      status: 'open'
    },
    {
      id: 3,
      name: 'مسجد جامع',
      capacity: 1000,
      currentOccupancy: 980,
      lat: 34.645,
      lng: 50.875,
      status: 'full'
    },
    {
      id: 4,
      name: 'فرهنگسرای جوان',
      capacity: 300,
      currentOccupancy: 0,
      lat: 34.648,
      lng: 50.882,
      status: 'closed'
    }
  ],

  alerts: [
    {
      id: 1,
      message: 'هشدار سطح نارنجی برای منطقه ۲. از تردد غیرضروری خودداری کنید.',
      level: 'warning',
      region: '۲',
      target: 'region',
      targetDescription: 'منطقه ۲',
      createdAt: now()
    }
  ],
  
  supportRequests: [
    {
      id: 1001,
      user: 'محمد صادقی',
      lat: 34.642,
      lng: 50.875,
      status: 'investigating',
      priority: 'high',
      region: '۴',
      neighborhood: 'بلوار امین',
      messages: [
         { id: 1, sender: 'user', text: '🚨 درخواست کمک اضطراری (SOS)', time: '۱۰:۳۰' },
         { id: 2, sender: 'system', text: 'موقعیت مکانی شما دریافت شد. آرامش خود را حفظ کنید. نیروهای امدادی در راه هستند.', time: '۱۰:۳۰' },
         { id: 3, sender: 'support', text: 'سلام. لطفاً وضعیت خود را دقیق‌تر شرح دهید. آیا کسی آسیب دیده است؟', time: '۱۰:۳۲' },
         { id: 4, sender: 'user', text: 'بله، پایم زیر آوار دیوار حیاط گیر کرده. نمی‌توانم تکان بخورم.', time: '۱۰:۳۳' },
         { id: 5, sender: 'support', text: 'تیم آتش‌نشانی ایستگاه ۴ اعزام شده است. تا ۵ دقیقه دیگر به شما می‌رسند. تلفن را در دسترس نگه دارید.', time: '۱۰:۳۵' }
      ],
      createdAt: now()
    },
    {
      id: 1002,
      user: 'سارا جلالی',
      lat: 34.655,
      lng: 50.880,
      status: 'open',
      priority: 'medium',
      region: '۱',
      neighborhood: 'خیابان ۱۹ دی',
      messages: [
         { id: 1, sender: 'user', text: 'بوی گاز شدیدی در کوچه احساس می‌شود. به اداره گاز زنگ زدیم اما هنوز کسی نیامده.', time: '۱۱:۱۵' },
         { id: 2, sender: 'system', text: 'پیام شما ثبت شد و به واحد مربوطه ارجاع گردید.', time: '۱۱:۱۵' }
      ],
      createdAt: now()
    },
    {
      id: 1003,
      user: 'حامد عباسی',
      lat: null,
      lng: null,
      status: 'closed',
      priority: 'low',
      region: 'نامشخص',
      neighborhood: '-',
      messages: [
         { id: 1, sender: 'user', text: 'سلام، نزدیک‌ترین پناهگاه امن به میدان مطهری کجاست؟', time: '۰۹:۰۰' },
         { id: 2, sender: 'support', text: 'سلام. نزدیک‌ترین پناهگاه به شما "مدرسه شهید رجایی" در خیابان ساحلی است. روی نقشه برنامه می‌توانید مسیر دقیق را ببینید.', time: '۰۹:۰۵' },
         { id: 3, sender: 'user', text: 'ممنون، دیدم.', time: '۰۹:۱۰' }
      ],
      createdAt: now()
    }
  ],

  logs: [
    { id: 1, incidentId: 1, action: 'گزارش ثبت شد', user: 'سیستم', timestamp: now() },
    { id: 2, incidentId: 2, action: 'تغییر وضعیت به در حال بررسی', user: 'ادمین', timestamp: now() }
  ],

  resources: [
      { id: 1, name: 'آمبولانس کد ۴۵', type: 'آمبولانس', status: 'Available', incidentId: null },
      { id: 2, name: 'آمبولانس کد ۲۲', type: 'آمبولانس', status: 'Dispatched', incidentId: 2 },
      { id: 3, name: 'ماشین آتش‌نشانی ۱', type: 'آتش‌نشانی', status: 'Available', incidentId: null },
      { id: 4, name: 'تیم امداد کوهستان', type: 'تیم امدادی', status: 'Maintenance', incidentId: null },
      { id: 5, name: 'ژنراتور سیار ۵۰ کاوا', type: 'تجهیزات', status: 'Available', incidentId: null },
      { id: 6, name: 'جرثقیل سنگین ۱۰ تن', type: 'ماشین‌آلات سنگین', status: 'Available', incidentId: null },
      { id: 7, name: 'لودر شهرداری', type: 'ماشین‌آلات سنگین', status: 'Dispatched', incidentId: 3 },
      { id: 8, name: 'واحد گشت پلیس ۱۱۰', type: 'پلیس', status: 'Available', incidentId: null },
      { id: 9, name: 'واحد موتوری پلیس', type: 'پلیس', status: 'Dispatched', incidentId: 2 },
      { id: 10, name: 'بالگرد امداد هلال احمر', type: 'امداد هوایی', status: 'Available', incidentId: null },
      { id: 11, name: 'تانکر آب ۱۰ هزار لیتری', type: 'آتش‌نشانی', status: 'Available', incidentId: null },
      { id: 12, name: 'آمبولانس ویژه ICU', type: 'آمبولانس', status: 'Maintenance', incidentId: null },
  ],

  vulnerabilityPoints: [
      { id: 1, lat: 34.635, lng: 50.865, score: 30, region: '۲' }, // Low score = High Risk
      { id: 2, lat: 34.638, lng: 50.868, score: 45, region: '۲' },
      { id: 3, lat: 34.655, lng: 50.890, score: 85, region: '۳' },
      { id: 4, lat: 34.640, lng: 50.875, score: 20, region: '۴' }, // High Risk
      { id: 5, lat: 34.642, lng: 50.878, score: 25, region: '۴' },
  ],

  trafficZones: [
    {
      id: 1,
      name: 'حرم مطهر حضرت معصومه (س)',
      lat: 34.6418,
      lng: 50.8790,
      radius: 600,
      status: 'heavy', // normal, heavy, critical
      density: 75, // 0-100 percentage
      capacity: 50000,
      currentCount: 37500,
      updatedAt: now(),
      altRoutes: ['بلوار زائر (مسیر رودخانه)', 'خیابان عمار یاسر', 'پل علیخانی']
    },
    {
      id: 2,
      name: 'مسجد مقدس جمکران',
      lat: 34.5800,
      lng: 50.9150,
      radius: 1200,
      status: 'normal',
      density: 30,
      capacity: 80000,
      currentCount: 24000,
      updatedAt: now(),
      altRoutes: ['بلوار پیامبر اعظم', 'رینگ سوم ترافیکی', 'جاده کوه خضر']
    }
  ]
};

export const db = {

  init: () => {
    if (typeof window !== 'undefined' && !localStorage.getItem(STORAGE_KEY)) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initialData));
    }
  },

  getData: () => {
    if (typeof window === 'undefined') return initialData;
    try {
      const item = localStorage.getItem(STORAGE_KEY);
      return item ? JSON.parse(item) : initialData;
    } catch (e) {
      console.error("LocalStorage Error", e);
      return initialData;
    }
  },

  saveData: (data) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }
  },

  // ======================
  // RISK ASSESSMENT
  // ======================
  getRiskAssessment: () => db.getData().riskAssessment,

  saveRiskAssessment: (result) => {
      const data = db.getData();
      data.riskAssessment = {
          score: result,
          date: now()
      };
      db.saveData(data);
  },

  // ======================
  // INCIDENTS
  // ======================

  getIncidents: () => db.getData().incidents || [],

  saveIncident: (incident) => {
    const data = db.getData();
    const incidents = data.incidents || [];

    if (!incident.id) {
      incident.id = Date.now();
      incident.createdAt = now();
      incidents.push(incident);
      // Log creation
      data.logs.push({
          id: Date.now(),
          incidentId: incident.id,
          action: 'ایجاد گزارش جدید',
          user: incident.reporter || 'سیستم',
          timestamp: now()
      });
    } else {
      const index = incidents.findIndex(i => i.id === incident.id);
      if (index !== -1) {
        const oldStatus = incidents[index].status;
        incidents[index] = incident;

        // Log status change
        if (oldStatus !== incident.status) {
          data.logs.push({
            id: Date.now(),
            incidentId: incident.id,
            action: `تغییر وضعیت از ${oldStatus} به ${incident.status}`,
            user: 'ادمین',
            timestamp: now()
          });
        }
      }
    }

    data.incidents = incidents;
    db.saveData(data);
    return incident;
  },

  deleteIncident: (id) => {
    const data = db.getData();
    data.incidents = data.incidents.filter(i => i.id !== id);
    db.saveData(data);
  },

  getIncidentLogs: (incidentId) => {
      const data = db.getData();
      return (data.logs || []).filter(l => l.incidentId === incidentId).sort((a,b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
  },

  // ======================
  // RESOURCES
  // ======================

  getResources: () => db.getData().resources || [],

  saveResource: (resource) => {
    const data = db.getData();
    const resources = data.resources || [];
    
    if (!resource.id) {
        resource.id = Date.now();
        if (!resource.status) resource.status = 'Available';
        if (!resource.incidentId) resource.incidentId = null;
        resources.push(resource);
        
        // Log creation
        data.logs.push({
            id: Date.now(),
            resourceId: resource.id,
            action: 'منبع جدید اضافه شد',
            description: `نام: ${resource.name}, نوع: ${resource.type}`,
            user: 'ادمین',
            timestamp: now()
        });

    } else {
        const index = resources.findIndex(r => r.id === resource.id);
        if (index !== -1) {
            resources[index] = { ...resources[index], ...resource };
        }
    }
    data.resources = resources;
    db.saveData(data);
  },

  deleteResource: (id) => {
    const data = db.getData();
    data.resources = (data.resources || []).filter(r => r.id !== id);
    db.saveData(data);
  },

  updateResourceStatus: (id, status, incidentId = null, note = '') => {
      const data = db.getData();
      const res = data.resources.find(r => r.id === id);
      if (res) {
          const oldStatus = res.status;
          res.status = status;
          res.incidentId = incidentId;
          
          // Log status change or note
          if (oldStatus !== status || note) {
              const action = note ? `گزارش: ${note}` : `تغییر وضعیت به ${status}`;
              data.logs.push({
                id: Date.now(),
                incidentId: incidentId,
                resourceId: id,
                action: `بروزرسانی وضعیت منبع`,
                description: note || `تغییر وضعیت از ${oldStatus} به ${status}`,
                user: 'ادمین',
                timestamp: now()
              });
          }

          db.saveData(data);
      }
  },

  assignResource: (resourceId, incidentId) => {
      db.updateResourceStatus(resourceId, 'Dispatched', incidentId, 'اعزام به ماموریت');
  },

  releaseResource: (resourceId) => {
      db.updateResourceStatus(resourceId, 'Available', null, 'پایان ماموریت و بازگشت');
  },

  getResourceLogs: (resourceId) => {
    const data = db.getData();
    return (data.logs || []).filter(l => l.resourceId === resourceId).sort((a,b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
  },

  // ======================
  // VULNERABILITY
  // ======================
  
  getVulnerabilityPoints: () => db.getData().vulnerabilityPoints || [],

  // ======================
  // TRAFFIC & CROWD
  // ======================
  getTrafficZones: () => db.getData().trafficZones || [],

  updateTrafficZone: (id, updates) => {
    const data = db.getData();
    const zones = data.trafficZones || [];
    const index = zones.findIndex(z => z.id === id);
    if (index !== -1) {
      zones[index] = { ...zones[index], ...updates, updatedAt: now() };
      data.trafficZones = zones;
      db.saveData(data);
    }
  },

  // ======================
  // CITIZENS
  // ======================

  getCitizens: () => db.getData().citizens || [],

  addCitizenSafe: (location, name = 'شهروند') => {
    const data = db.getData();
    data.citizens.push({
      id: Date.now(),
      name,
      status: 'safe',
      location,
      timestamp: now()
    });
    db.saveData(data);
  },

  // ======================
  // SHELTERS
  // ======================

  getShelters: () => db.getData().shelters || [],

  updateShelterOccupancy: (id, count) => {
    const data = db.getData();
    const shelter = data.shelters.find(s => s.id === id);
    if (shelter) {
      shelter.currentOccupancy += count;
      if (shelter.currentOccupancy >= shelter.capacity) {
        shelter.status = 'full';
      }
      db.saveData(data);
    }
  },

  // ======================
  // ALERTS
  // ======================

  getAlerts: () => db.getData().alerts || [],

  addAlert: (alert) => {
    const data = db.getData();
    alert.id = Date.now();
    alert.createdAt = now();
    // Keep alerts array clean, maybe limit to last 50?
    data.alerts.push(alert);
    db.saveData(data);
  },

  // ======================
  // SUPPORT REQUESTS (SOS/CHAT)
  // ======================

  getSupportRequests: () => db.getData().supportRequests || [],

  createSupportRequest: (payload) => {
    // payload: { user, lat, lng, message }
    const data = db.getData();
    // Simulate detecting region based on lat/lng in a real app
    const region = '۴'; 
    
    const req = {
      id: Date.now(),
      user: payload.user || 'شهروند ناشناس',
      lat: payload.lat,
      lng: payload.lng,
      status: 'open', // open, investigating, closed
      priority: 'high',
      region: region,
      neighborhood: 'نامشخص',
      messages: [
         { 
           id: Date.now(), 
           sender: 'user', // user, support, system
           text: payload.message || 'درخواست کمک اضطراری', 
           time: new Date().toLocaleTimeString('fa-IR') 
         }
      ],
      createdAt: new Date().toISOString()
    };
    
    if (!data.supportRequests) data.supportRequests = [];
    data.supportRequests.push(req);
    db.saveData(data);
    return req;
  },
  
  addSupportMessage: (requestId, messageData) => {
     // messageData: { sender, text }
     const data = db.getData();
     if (!data.supportRequests) data.supportRequests = [];
     const req = data.supportRequests.find(r => r.id === requestId);
     if (req) {
         req.messages.push({
             id: Date.now(),
             sender: messageData.sender,
             text: messageData.text,
             time: new Date().toLocaleTimeString('fa-IR')
         });
         db.saveData(data);
         return req;
     }
     return null;
  },

  updateSupportStatus: (requestId, status) => {
      const data = db.getData();
      if (!data.supportRequests) return;
      const req = data.supportRequests.find(r => r.id === requestId);
      if (req) {
          req.status = status;
          db.saveData(data);
      }
  },

  // ======================
  // STATS (داشبورد)
  // ======================

  getStats: () => {
    const data = db.getData();
    return {
      totalIncidents: data.incidents.length,
      newIncidents: data.incidents.filter(i => i.status === 'جدید').length,
      inProgress: data.incidents.filter(i => i.status === 'در حال بررسی').length,
      resolved: data.incidents.filter(i => i.status === 'حل شده').length,
      safeCitizens: data.citizens.filter(c => c.status === 'safe').length,
      injuredCitizens: data.citizens.filter(c => c.status === 'injured').length,
      openShelters: data.shelters.filter(s => s.status === 'open').length,
      fullShelters: data.shelters.filter(s => s.status === 'full').length
    };
  }

};

// Initialize
db.init();
