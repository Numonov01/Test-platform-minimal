import { Box, Grid, useTheme } from '@mui/material';

import { CONFIG } from 'src/config-global';
import { _ecommerceSalesOverview } from 'src/_mock';
import { DashboardContent } from 'src/layouts/dashboard';

import { AppWidgetSummary } from '../app-widget-summary';
import { CourseWidgetSummary } from '../course-widget-summary';
import { EcommerceSalesOverview } from '../ecommerce-sales-overview';
import { EcommerceCurrentBalance } from '../ecommerce-current-balance';

// ----------------------------------------------------------------------

export default function OverviewAppView() {
  const theme = useTheme();

  return (
    <DashboardContent maxWidth="xl">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Jami o'quvchilar"
            percent={-0.1}
            total={678}
            chart={{
              colors: [theme.vars.palette.error.main],
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
              series: [18, 19, 31, 8, 16, 37, 12, 33],
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="O'qituvchilar"
            percent={0.2}
            total={4876}
            chart={{
              colors: [theme.vars.palette.info.main],
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
              series: [20, 41, 63, 33, 28, 35, 50, 46],
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="To'garaklar"
            percent={-0.1}
            total={678}
            chart={{
              colors: [theme.vars.palette.error.main],
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
              series: [18, 19, 31, 8, 16, 37, 12, 33],
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Oylik daromad"
            percent={2.6}
            total={18765}
            chart={{
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
              series: [15, 18, 12, 51, 68, 11, 39, 37],
            }}
          />
        </Grid>

        <Grid item xs={12} md={6} lg={8}>
          <EcommerceSalesOverview title="KPI ko'rsatkichlari" data={_ecommerceSalesOverview} />
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <EcommerceCurrentBalance
            title="So'nggi to'lovlar"
            earning={25500}
            refunded={1600}
            orderTotal={287650}
            currentBalance={187650}
          />
        </Grid>

        <Grid item xs={12}>
          <Box sx={{ mb: 2, typography: 'h6' }}>Yaqinlashib kelayotgan darslar</Box>
          <Box
            sx={{
              gap: 3,
              display: 'grid',
              gridTemplateColumns: {
                xs: 'repeat(1, 1fr)',
                md: 'repeat(3, 1fr)',
                lg: 'repeat(3, 1fr)',
              },
            }}
          >
            <CourseWidgetSummary
              title="Matematika olimpiadasi"
              total={6}
              icon={`${CONFIG.site.basePath}/assets/icons/courses/ic-courses-progress.svg`}
            />

            <CourseWidgetSummary
              title="Ingliz tili"
              total={3}
              color="success"
              icon={`${CONFIG.site.basePath}/assets/icons/courses/ic-courses-completed.svg`}
            />

            <CourseWidgetSummary
              title="Robototexnika"
              total={2}
              color="secondary"
              icon={`${CONFIG.site.basePath}/assets/icons/courses/ic-courses-certificates.svg`}
            />
          </Box>
        </Grid>
      </Grid>
    </DashboardContent>
  );
}
