import type { CardProps } from '@mui/material/Card';
import type { TableHeadCustomProps } from 'src/components/table';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import TableRow from '@mui/material/TableRow';
import { useTheme } from '@mui/material/styles';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import IconButton from '@mui/material/IconButton';
import CardHeader from '@mui/material/CardHeader';

import { fDate } from 'src/utils/format-time';
import { fCurrency } from 'src/utils/format-number';

import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';
import { Scrollbar } from 'src/components/scrollbar';
import { TableHeadCustom } from 'src/components/table';
import { usePopover, CustomPopover } from 'src/components/custom-popover';

// ----------------------------------------------------------------------

type InvoiceData = {
  id: string;
  invoiceNumber: string;
  status: 'paid' | 'sent' | 'overdue' | 'draft';
  amount: number;
  dueDate: string;
  clientName: string;
};

type Props = CardProps & {
  title?: string;
  subheader?: string;
  headLabel: TableHeadCustomProps['headLabel'];
  tableData: InvoiceData[];
};

export function BankingInvoiceTable({ title, subheader, tableData, headLabel, ...other }: Props) {
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} sx={{ mb: 3 }} />

      <Scrollbar sx={{ minHeight: 462 }}>
        <Table sx={{ minWidth: 720 }}>
          <TableHeadCustom headLabel={headLabel} />

          <TableBody>
            {tableData.map((row) => (
              <RowItem key={row.id} row={row} />
            ))}
          </TableBody>
        </Table>
      </Scrollbar>

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Box sx={{ p: 2, textAlign: 'right' }}>
        <Button
          size="small"
          color="inherit"
          endIcon={<Iconify icon="eva:arrow-ios-forward-fill" width={18} sx={{ ml: -0.5 }} />}
        >
          Barchasini ko&apos;rish
        </Button>
      </Box>
    </Card>
  );
}

// ----------------------------------------------------------------------

type RowItemProps = {
  row: InvoiceData;
};

function RowItem({ row }: RowItemProps) {
  const theme = useTheme();
  const popover = usePopover();
  const lightMode = theme.palette.mode === 'light';

  const handlePay = () => {
    popover.onClose();
    console.info('PAY', row.id);
  };

  const handleDownload = () => {
    popover.onClose();
    console.info('DOWNLOAD', row.id);
  };

  const handlePrint = () => {
    popover.onClose();
    console.info('PRINT', row.id);
  };

  const handleDelete = () => {
    popover.onClose();
    console.info('DELETE', row.id);
  };

  return (
    <>
      <TableRow>
        <TableCell sx={{ fontWeight: 600 }}>{row.invoiceNumber}</TableCell>

        <TableCell>{fDate(row.dueDate)}</TableCell>

        <TableCell>{fCurrency(row.amount)}</TableCell>

        <TableCell>
          <Label
            variant={lightMode ? 'soft' : 'filled'}
            color={
              (row.status === 'paid' && 'success') ||
              (row.status === 'sent' && 'info') ||
              (row.status === 'overdue' && 'error') ||
              'default'
            }
            sx={{ textTransform: 'capitalize' }}
          >
            {row.status === 'paid' && "To'langan"}
            {row.status === 'sent' && 'Yuborilgan'}
            {row.status === 'overdue' && "Muddati o'tgan"}
            {row.status === 'draft' && 'Qoralama'}
          </Label>
        </TableCell>

        <TableCell align="right">
          {row.status === 'sent' ? (
            <Button
              size="small"
              variant="contained"
              color="inherit"
              startIcon={<Iconify icon="eva:checkmark-circle-2-fill" />}
              onClick={handlePay}
              sx={{ mr: 1 }}
            >
              To&apos;lash
            </Button>
          ) : null}
          <IconButton color={popover.open ? 'inherit' : 'default'} onClick={popover.onOpen}>
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        </TableCell>
      </TableRow>

      <CustomPopover
        open={popover.open}
        anchorEl={popover.anchorEl}
        onClose={popover.onClose}
        slotProps={{ arrow: { placement: 'right-top' } }}
      >
        <MenuList>
          <MenuItem onClick={handleDownload}>
            <Iconify icon="eva:cloud-download-fill" />
            Yuklab olish
          </MenuItem>

          <MenuItem onClick={handlePrint}>
            <Iconify icon="solar:printer-minimalistic-bold" />
            Chop etish
          </MenuItem>

          <Divider sx={{ borderStyle: 'dashed' }} />

          <MenuItem onClick={handleDelete} sx={{ color: 'error.main' }}>
            <Iconify icon="solar:trash-bin-trash-bold" />
            O&apos;chirish
          </MenuItem>
        </MenuList>
      </CustomPopover>
    </>
  );
}
