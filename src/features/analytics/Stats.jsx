import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import EvStationOutlinedIcon from '@mui/icons-material/EvStationOutlined';
import ChargingStationOutlinedIcon from '@mui/icons-material/ChargingStationOutlined';

import Stat from "./Stat";
/* eslint-disable react/prop-types */

function Stats({ stations, chargers, drivers, totalRevenue, energy }) {
  return (
    <>
      <Stat
        title="Stations"
        color="pink"
        icon={<ChargingStationOutlinedIcon />}
        value={stations}
      />
      <Stat
        title="Chargers"
        color="blue"
        icon={<EvStationOutlinedIcon />}
        value={chargers}
      />
      <Stat
        title="Drivers"
        color="yellow"
        value={drivers}
        icon={<AccountCircleOutlinedIcon />}
      />
      <Stat
        title="Total Revenue"
        color="blue"
        icon={<CurrencyRupeeIcon />}
        value={totalRevenue}
      />
      <Stat
        title="Energy"
        color="green"
        icon={<ElectricBoltIcon />}
        value={`${energy} kWh`}
      />
    </>
  );
}

export default Stats;
