import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { tabMobile, tabFrontEnd, tabDatabase, tabBackEnd, tabCMS, tabDevops } from '../constants/data';
import MobileTabs from "./MobileTabs";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const BasicTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    border: "solid 1px #c3c3c3",
    borderRadius: 1,
    color: "#696969",
    fontSize: "14px",
    fontWeight: 500,
    fontFamily: "Poppins, sans-serif",
    mr: 2,
    pt: 2.5,
    pb: 2.5,
    px: 3.2,
    transition: "all 0.5s ease",
    ":focus": { color: "#fff", background: "#43b7c5" },
    "&.Mui-selected": { border: "none", color: "#fff", background: "#43b7c5" },
  };

  return (
    <>
      <div className="my-24 hidden md:block">
        <div className="text-center my-6">
          <h1 className="text-[40px] font-[700] text-[#333333] pb-8">
            Technologies we work with
          </h1>
        </div>

        <Box sx={{ width: "92%", marginX: "auto" }}>
          <Box sx={{ placeItems: "center"}} >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              TabIndicatorProps={{ style: { display: "none" } }}
              
              // sx={{
              //   display: "grid",
              //   gridTemplateColumns: {
              //     sm: "repeat(1, 1fr)", // Two tabs per row for small screens
              //     md: "repeat(auto-fit, minmax(100px, 1fr))", // Auto-adjust for medium+ screens
              //   },
              //   gap: 2, // Adds space between tabs
              // }}
            >
              <Tab label="Mobile" {...a11yProps(0)} sx={style} />
              <Tab label="Front End" {...a11yProps(1)} sx={style} />
              <Tab label="Database" {...a11yProps(2)} sx={style} />
              <Tab label="Backend" {...a11yProps(3)} sx={style} />
              <Tab label="Cms" {...a11yProps(4)} sx={style} />
              <Tab label="Devops" {...a11yProps(5)} sx={style} />
            </Tabs>
          </Box>


          <CustomTabPanel value={value} index={0}>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-20 md:gap-x-0 gap-0 mt-8">
              {tabMobile.map((data, index) => (
                <div key={index} className="flex flex-col items-center md:px-6 md:hover:-translate-y-2 transition duration-700">
                  <img className="bg-[#F4F6F6] rounded-lg max-w-64 h-24 md:max-w-96 md:h-36" src={data.icon} alt="" />
                  <div className="text-[16px] font-[500] text-[#333333] pt-4 pb-12">{data.brand}</div>
                </div>
              ))}
            </div>
          </CustomTabPanel>

          <CustomTabPanel value={value} index={1}>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-20 md:gap-x-0 gap-0 mt-8">
              {tabFrontEnd.map((data, index) => (
                <div key={index} className="flex flex-col items-center md:px-6 md:hover:-translate-y-2 transition duration-700">
                  <img className="bg-[#F4F6F6] rounded-lg max-w-64 h-24 md:max-w-96 md:h-36" src={data.icon} alt="" />
                  <div className="text-[16px] font-[500] text-[#333333] pt-4 pb-12">{data.brand}</div>
                </div>
              ))}
            </div>
          </CustomTabPanel>

          <CustomTabPanel value={value} index={2}>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-20 md:gap-x-0 gap-0 mt-8">
              {tabDatabase.map((data, index) => (
                <div key={index} className="flex flex-col items-center md:px-6 md:hover:-translate-y-2 transition duration-700">
                  <img className="bg-[#F4F6F6] rounded-lg max-w-64 h-24 md:max-w-96 md:h-36" src={data.icon} alt="" />
                  <div className="text-[16px] font-[500] text-[#333333] pt-4 pb-12">{data.brand}</div>
                </div>
              ))}
            </div>
          </CustomTabPanel>

          <CustomTabPanel value={value} index={3}>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-20 md:gap-x-0 gap-0 mt-8">
              {tabBackEnd.map((data, index) => (
                <div key={index} className="flex flex-col items-center md:px-6 md:hover:-translate-y-2 transition duration-700">
                  <img className="bg-[#F4F6F6] rounded-lg max-w-64 h-24 md:max-w-96 md:h-36" src={data.icon} alt="" />
                  <div className="text-[16px] font-[500] text-[#333333] pt-4 pb-12">{data.brand}</div>
                </div>
              ))}
            </div>
          </CustomTabPanel>

          <CustomTabPanel value={value} index={4}>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-20 md:gap-x-0 gap-0 mt-8">
              {tabCMS.map((data, index) => (
                <div key={index} className="flex flex-col items-center md:px-6 md:hover:-translate-y-2 transition duration-700">
                  <img className="bg-[#F4F6F6] rounded-lg max-w-64 h-24 md:max-w-96 md:h-36" src={data.icon} alt="" />
                  <div className="text-[16px] font-[500] text-[#333333] pt-4 pb-12">{data.brand}</div>
                </div>
              ))}
            </div>
          </CustomTabPanel>

          <CustomTabPanel value={value} index={5}>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-20 md:gap-x-0 gap-0 mt-8">
              {tabDevops.map((data, index) => (
                <div key={index} className="flex flex-col items-center md:px-6 md:hover:-translate-y-2 transition duration-700">
                  <img className="bg-[#F4F6F6] rounded-lg max-w-64 h-24 md:max-w-96 md:h-36" src={data.icon} alt="" />
                  <div className="text-[16px] font-[500] text-[#333333] pt-4 pb-12">{data.brand}</div>
                </div>
              ))}
            </div>
          </CustomTabPanel>

        </Box>
      </div>

      <div className="block md:hidden">
        <MobileTabs />
      </div>
    </>
  );
};

export default BasicTabs;
