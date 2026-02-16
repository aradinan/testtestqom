
import React, { useState, useEffect } from 'react';
import { Container, Box, Typography, Paper, Tabs, Tab, Avatar } from '@mui/material';
import { LayoutDashboard, User } from 'lucide-react';
import AdminDashboard, { DashboardStats } from './pages/AdminDashboard';
import CitizenHome from './pages/CitizenHome';
import { db } from './db';

const App: React.FC = () => {
  const [view, setView] = useState<'admin' | 'citizen'>('citizen');
  const [stats, setStats] = useState<DashboardStats>({
    totalIncidents: 0,
    safeCitizens: 0,
    openShelters: 0
  });
  const [incidents, setIncidents] = useState<any[]>([]);
  const [shelters, setShelters] = useState<any[]>([]);
  const [alerts, setAlerts] = useState<any[]>([]);

  // Load initial data
  useEffect(() => {
    refreshData();
  }, []);

  const refreshData = () => {
    setStats(db.getStats());
    setIncidents(db.getIncidents());
    setShelters(db.getShelters());
    setAlerts(db.getAlerts());
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: 'admin' | 'citizen') => {
    setView(newValue);
    refreshData();
  };

  // Handler for Citizen "I am Safe" action
  const handleCitizenSafe = (data: { lat: number; lng: number; name?: string }) => {
    db.addCitizenSafe({ lat: data.lat, lng: data.lng }, data.name || 'شهروند');
    refreshData();
  };

  // Handler for Citizen "Report Incident" action
  const handleReportIncident = (data: { type: string; description: string; lat: number; lng: number }) => {
    const newIncident = {
      title: `گزارش مردمی: ${data.type}`,
      type: data.type,
      reporter: 'شهروند',
      status: 'جدید',
      region: 'نامشخص', // Logic to determine region could be added here
      neighborhood: 'نامشخص',
      address: data.description || 'ثبت شده از طریق اپلیکیشن شهروندی',
      lat: data.lat,
      lng: data.lng
    };
    db.saveIncident(newIncident as any);
    refreshData();
  };

  // Handler for Citizen deleting their own report
  const handleDeleteIncident = (id: number) => {
    if (window.confirm('آیا از حذف این گزارش اطمینان دارید؟')) {
      db.deleteIncident(id);
      refreshData();
    }
  };

  return (
    <Box className="min-h-screen bg-gray-50" dir="rtl">
      {/* View Switcher (Tabs) */}
      <Paper elevation={0} square className="border-b border-gray-200 sticky top-0 z-50 bg-white/95 backdrop-blur-sm">
        <Container maxWidth={false} sx={{ px: { xs: 1, sm: 2, lg: 4 } }}>
          <Box display="flex" justifyContent="space-between" alignItems="center" py={1}>
            <Box display="flex" alignItems="center" gap={1.5}>
                <img src="/logo.png" alt="Logo" style={{ height: 32, width: 'auto' }} onError={(e) => e.currentTarget.style.display = 'none'} />
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <Typography variant="subtitle1" fontWeight="bold" sx={{ fontFamily: 'Vazirmatn', lineHeight: 1.2 }}>
                    سامانه مدیریت بحران
                    </Typography>
                    <Typography variant="caption" color="text.secondary" sx={{ fontFamily: 'Vazirmatn' }}>
                    شهر هوشمند و تاب‌آور
                    </Typography>
                </Box>
            </Box>
            
            <Tabs 
              value={view} 
              onChange={handleTabChange} 
              aria-label="app navigation tabs"
              textColor="primary"
              indicatorColor="primary"
              variant="scrollable"
              scrollButtons="auto"
              sx={{ minHeight: 48 }}
            >
              <Tab 
                value="admin" 
                label="مدیریت" 
                icon={<LayoutDashboard size={18} />}
                iconPosition="start"
                sx={{ fontFamily: 'Vazirmatn', minHeight: 48, flexDirection: 'row', gap: 1, fontWeight: 'bold' }} 
              />
              <Tab 
                value="citizen" 
                label="شهروند" 
                icon={<User size={18} />}
                iconPosition="start"
                sx={{ fontFamily: 'Vazirmatn', minHeight: 48, flexDirection: 'row', gap: 1, fontWeight: 'bold' }} 
              />
            </Tabs>
          </Box>
        </Container>
      </Paper>

      <Container 
        maxWidth={view === 'admin' ? false : "sm"} 
        sx={{ 
          py: 2, 
          px: { xs: 1, sm: 2, lg: 4 }, 
          minHeight: 'calc(100vh - 64px)' 
        }}
      >
        {view === 'admin' ? (
          <AdminDashboard 
            stats={stats} 
            incidents={incidents} 
            onDataChange={refreshData}
          />
        ) : (
          <CitizenHome 
            incidents={incidents}
            shelters={shelters}
            alerts={alerts}
            onSafeClick={handleCitizenSafe}
            onReportIncident={handleReportIncident}
            onDeleteReport={handleDeleteIncident}
          />
        )}
      </Container>
    </Box>
  );
};

export default App;
