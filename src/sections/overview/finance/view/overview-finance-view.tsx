import { useState } from 'react';

import { Tab, Box, Grid } from '@mui/material';

import { CONFIG } from 'src/config-global';
import { DashboardContent } from 'src/layouts/dashboard';

import { CustomTabs } from 'src/components/custom-tabs';

import { BankingInvoiceTable } from '../banking-invoice-table';
import { AnalyticsWidgetSummary } from '../analytics-widget-summary';
import { BankingRecentTransitions } from '../banking-recent-transitions';

// ----------------------------------------------------------------------

const paymentData = [
  {
    id: '1',
    type: 'Income',
    status: 'completed',
    amount: 500000,
    message: 'Matematika olimpiadasi',
    date: '2026-02-10T14:30:00',
    category: 'Payme',
    name: 'Ali Valiyev',
    avatarUrl: '/assets/illustrations/trainer.png',
  },
  {
    id: '2',
    type: 'Income',
    status: 'completed',
    amount: 750000,
    message: 'Ingliz tili intensiv kursi - IELTS/CEFR',
    date: '2026-02-11T09:15:00',
    category: 'Click',
    name: 'Dilnoza Karimova',
    avatarUrl: '/assets/illustrations/girl.png',
  },
  {
    id: '3',
    type: 'Income',
    status: 'progress',
    amount: 600000,
    message: 'Python dasturlash',
    date: '2026-02-12T16:45:00',
    category: 'Payme',
    name: 'Sardor Rahimov',
    avatarUrl: '/assets/illustrations/boy.png',
  },
  {
    id: '4',
    type: 'Income',
    status: 'completed',
    amount: 450000,
    message: 'Kimyo kursi',
    date: '2026-02-12T11:20:00',
    category: 'Click',
    name: 'Madina Toshmatova',
    avatarUrl: '/assets/illustrations/girl.png',
  },
  {
    id: '5',
    type: 'Income',
    status: 'error',
    amount: 550000,
    message: "Shaxmat o'yinini o'rganish",
    date: '2026-02-13T08:00:00',
    category: 'Payme',
    name: 'Otabek Yusupov',
    avatarUrl: '/assets/illustrations/trainer.png',
  },
  {
    id: '6',
    type: 'Income',
    status: 'completed',
    amount: 800000,
    message: 'Dasturlash kursi',
    date: '2026-02-13T13:30:00',
    category: 'Click',
    name: 'Zarina Ahmadova',
    avatarUrl: '/assets/illustrations/girl.png',
  },
];

const invoiceData = [
  {
    id: '1',
    invoiceNumber: 'INV-2024-001',
    status: 'paid' as const,
    amount: 150000,
    dueDate: '2024-03-10',
    clientName: 'Ali Valiyev',
  },
  {
    id: '2',
    invoiceNumber: 'INV-2024-002',
    status: 'sent' as const,
    amount: 190000,
    dueDate: '2024-03-15',
    clientName: 'Dilnoza Karimova',
  },
  {
    id: '3',
    invoiceNumber: 'INV-2024-003',
    status: 'sent' as const,
    amount: 250000,
    dueDate: '2024-03-20',
    clientName: 'Sardor Rahimov',
  },
  {
    id: '4',
    invoiceNumber: 'INV-2024-004',
    status: 'overdue' as const,
    amount: 180000,
    dueDate: '2024-03-05',
    clientName: 'Madina Toshmatova',
  },
  {
    id: '5',
    invoiceNumber: 'INV-2024-005',
    status: 'paid' as const,
    amount: 320000,
    dueDate: '2024-03-12',
    clientName: 'Otabek Yusupov',
  },
  {
    id: '6',
    invoiceNumber: 'INV-2024-006',
    status: 'draft' as const,
    amount: 275000,
    dueDate: '2024-03-25',
    clientName: 'Zarina Ahmadova',
  },
];

export function OverviewFinanceView() {
  const [currentTab, setCurrentTab] = useState('payments');

  const handleChangeTab = (event: React.SyntheticEvent, newValue: string) => {
    setCurrentTab(newValue);
  };

  return (
    <DashboardContent maxWidth="xl">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <AnalyticsWidgetSummary
            title="Jami to'langan"
            percent={2.6}
            total={714000}
            icon={
              <img alt="icon" src={`${CONFIG.site.basePath}/assets/icons/glass/ic-glass-bag.svg`} />
            }
            chart={{
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
              series: [22, 8, 35, 50, 82, 84, 77, 12],
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <AnalyticsWidgetSummary
            title="Kutilayotgan"
            percent={-0.1}
            total={1352831}
            color="secondary"
            icon={
              <img
                alt="icon"
                src={`${CONFIG.site.basePath}/assets/icons/glass/ic-glass-users.svg`}
              />
            }
            chart={{
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
              series: [56, 47, 40, 62, 73, 30, 23, 54],
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <AnalyticsWidgetSummary
            title="Muddati o'tgan"
            percent={2.8}
            total={1723315}
            color="warning"
            icon={
              <img alt="icon" src={`${CONFIG.site.basePath}/assets/icons/glass/ic-glass-buy.svg`} />
            }
            chart={{
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
              series: [40, 70, 50, 28, 70, 75, 7, 64],
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <AnalyticsWidgetSummary
            title="Hisob-fakturalar"
            percent={3.6}
            total={234}
            color="error"
            icon={
              <img
                alt="icon"
                src={`${CONFIG.site.basePath}/assets/icons/glass/ic-glass-message.svg`}
              />
            }
            chart={{
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
              series: [56, 30, 23, 54, 47, 40, 62, 73],
            }}
          />
        </Grid>
      </Grid>

      <Box sx={{ mt: 3 }}>
        <Box sx={{ display: 'inline-flex' }}>
          <CustomTabs value={currentTab} onChange={handleChangeTab}>
            <Tab label="To'lovlar" value="payments" />
            <Tab label="Hisob-fakturalar" value="invoices" />
          </CustomTabs>
        </Box>

        <Box sx={{ mt: 3 }}>
          {currentTab === 'payments' && (
            <BankingRecentTransitions
              title="To'lovlar tarixi"
              subheader="Oxirgi to'lovlar haqida ma'lumot"
              tableData={paymentData}
              headLabel={[
                { id: 'description', label: 'Tavsif' },
                { id: 'date', label: 'Vaqt' },
                { id: 'amount', label: 'Miqdor' },
                { id: 'status', label: 'Status' },
                { id: '' },
              ]}
            />
          )}

          {currentTab === 'invoices' && (
            <BankingInvoiceTable
              title="Hisob-fakturalar"
              subheader="Barcha hisob-fakturalar ro'yxati"
              tableData={invoiceData}
              headLabel={[
                { id: 'number', label: 'Raqam' },
                { id: 'date', label: 'Muddati' },
                { id: 'amount', label: 'Summa' },
                { id: 'status', label: 'Status' },
                { id: 'actions', label: 'Amallar' },
              ]}
            />
          )}
        </Box>
      </Box>
    </DashboardContent>
  );
}
