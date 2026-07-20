import type { CardProps } from '@mui/material/Card';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import { fCurrency } from 'src/utils/format-number';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

type Props = CardProps & {
  title: string;
  earning: number;
  refunded: number;
  orderTotal: number;
  currentBalance: number;
};

export function EcommerceCurrentBalance({
  sx,
  title,
  earning,
  refunded,
  orderTotal,
  currentBalance,
  ...other
}: Props) {
  const row = (label: string, value: number, isPositive: boolean = true) => (
    <Box
      sx={{
        display: 'flex',
        typography: 'body2',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Box
          sx={{
            width: 28,
            height: 28,
            borderRadius: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: isPositive ? 'success.lighter' : 'error.lighter',
          }}
        >
          <Iconify
            width={20}
            icon={isPositive ? 'eva:trending-up-fill' : 'eva:trending-down-fill'}
            sx={{ color: isPositive ? 'success.main' : 'error.main' }}
          />
        </Box>
        <Box component="span" sx={{ color: 'text.secondary' }}>
          {label}
        </Box>
      </Box>
      <Box component="span">{fCurrency(value)}</Box>
    </Box>
  );

  return (
    <Card sx={{ p: 3, ...sx }} {...other}>
      <Box sx={{ mb: 1, typography: 'subtitle2' }}>{title}</Box>

      <Box sx={{ gap: 2, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ typography: 'h3' }}>{fCurrency(currentBalance)}</Box>

        {row('Jahongirov Elbek', orderTotal, true)}
        {row('Aliyev Shamshod', earning, true)}
        {row('Azizova Malohat', refunded, false)}
        {row('Aliyev Shamshod', earning, true)}
        {row('Azizova Malohat', refunded, false)}
        {row('Aliyev Shamshod', earning, true)}
      </Box>
    </Card>
  );
}
