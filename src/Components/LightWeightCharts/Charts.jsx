import React, { useEffect, useState, useRef } from "react";
import { LineStyle, createChart } from "lightweight-charts";
import "../../styles/charts.css";

function Charts({ companyName }) {
  const chartContainerRef = useRef();
  const tooltipRef = useRef();
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ left: 0 });
  const [popupMessage, setPopupMessage] = useState(null);
  const [alertPrice, setAlertPrice] = useState(null);
  const [candlePrice, setCandlePrice] = useState(null);
  const [linePrice, setLinePrice] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);
  const [initialData, setInitialData] = useState(null);
  // const [cname, setCname] = useState("");
  // useEffect(() => {
  //   setCname(companyName);
  //   console.log("cname:",cname,"setCname:",setCname,"Company Name:", companyName);

  // }, []);

  const chartContainerStyles = {
    position: "absolute",
    top: "56px",
    left: "60px",
    height: "calc(100vh - 56px)",
    width: "calc(100% - 120px)",
    backgroundColor: "#222",
    zIndex: 1,
  };

  const tooltipStyles = {
    position: "absolute",
    width: "120px",
    height: "auto",
    border: "1px solid white",
    zIndex: 1000,
    color: "black",
    background: "white",
    padding: "5px",
    marginTop: "30px",
  };

  const chartInfoStyles = {
    position: "absolute",
    top: "30px",
    left: "100px",
    zIndex: 20,
    color: "white",
  };

  const chartInfoDivStyles = {
    display: "flex",
  };

  const chartInfoItemStyles = {
    marginRight: "10px",
  };

  const popupStyles = {
    position: "absolute",
    backgroundColor: "black",
    padding: "10px",
    border: "1px solid black",
    zIndex: 1001,
    display: popupVisible ? "block" : "none",
    pointerEvents: "none",
    left: `${popupPosition.left}px`,
    top: `${popupPosition.top}px`, // Set dynamic top position
  };

  console.log("Charts.jsx", companyName);

  useEffect(() => {
    if (!companyName) return; // Prevent the API call if companyName is not passed.

    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://aioslab.cloudjiffy.net/stvw_charting-data",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              account_no: companyName, // Pass companyName as account_no
            }),
          }
        );

        const ans = await response.json();
        setInitialData(ans.data); // Update state with fetched data
      } catch (error) {
        console.error("Failed to fetch:", error);
      }
    };

    fetchData();
  }, [companyName]); // Refetch data when companyName changes

  useEffect(() => {
    if (!initialData) return;

    const lineData = initialData.map((item) => ({
      time: item.date,
      value: (item.close + item.open) / 2,
    }));

    const candleData = initialData.map((item) => ({
      time: item.date,
      open: item.open,
      high: item.high,
      low: item.low,
      close: item.close,
    }));

    const chart = createChart(chartContainerRef.current);

    chart.applyOptions({
      layout: {
        background: { color: "#222" },
        textColor: "#DDD",
      },
      grid: {
        vertLines: { color: "#444" },
        horzLines: { color: "#444" },
      },
      width: chartContainerRef.current.clientWidth,
      height: 670,
      crosshair: {
        vertLine: {
          width: 5,
          color: "#C3BCDB44",
          style: LineStyle.Solid,
          labelBackgroundColor: "#9B7DFF",
        },
        horzLine: {
          color: "#9B7DFF",
          labelBackgroundColor: "#9B7DFF",
        },
      },
      localization: {
        priceFormatter: (price) => {
          return new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            minimumFractionDigits: 0,
          }).format(price);
        },
      },
    });

    chart.priceScale("right").applyOptions({
      borderColor: "#71649C",
      visible: false,
    });

    chart.priceScale("left").applyOptions({
      borderColor: "#71649C",
      visible: true,
    });

    chart.timeScale().applyOptions({
      borderColor: "#71649C",
      rightOffset: 20,
      barSpacing: 15,
      minBarSpacing: 5,
      fixLeftEdge: true,
    });

    chart.timeScale().fitContent();

    const lineSeries = chart.addLineSeries();
    const candleStickSeries = chart.addCandlestickSeries();

    candleStickSeries.applyOptions({
      wickUpColor: "rgb(54, 116, 217)",
      upColor: "rgb(54, 116, 217)",
      wickDownColor: "rgb(225, 50, 85)",
      downColor: "rgb(225, 50, 85)",
      borderVisible: false,
      priceScaleId: "left",
    });

    lineSeries.applyOptions({
      lineWidth: 1,
      priceScaleId: "right",
    });

    candleStickSeries.setData(candleData);
    lineSeries.setData(lineData);

    // Crosshair move event for tooltip and info update
    chart.subscribeCrosshairMove((param) => {
      if (param.time) {
        const data = param.seriesData.get(candleStickSeries);
        const linePriceData = param.seriesData.get(lineSeries);

        const coordinate = lineSeries.priceToCoordinate(linePriceData.value);
        const shiftedCoordinate = param.point.x;

        tooltipRef.current.style.left = shiftedCoordinate + "px";
        tooltipRef.current.style.top = coordinate + "px";

        setCandlePrice(data);
        setLinePrice(linePriceData);
        setCurrentTime(new Date(param.time).toLocaleDateString());
      }
    });

    chart.subscribeClick((param) => {
      if (param.time) {
        const data = param.seriesData.get(candleStickSeries);
        if (data) {
          const formattedDate = new Date(param.time).toLocaleDateString(); // Formatting date
          setPopupMessage(`The candle for ${formattedDate} is clicked.`);
          setAlertPrice(data.close);

          // Set popup position dynamically based on click position
          setPopupPosition({
            left: param.point.x,
            top: param.point.y,
          });

          setPopupVisible(true);
          setTimeout(() => {
            setPopupVisible(false);
          }, 10000); // Hide popup after 10 seconds
        }
      }
    });

    const handleResize = () => {
      chart.applyOptions({
        width: chartContainerRef.current.clientWidth,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      chart.remove();
      window.removeEventListener("resize", handleResize);
    };
  }, [initialData]);

  return (
    <div ref={chartContainerRef} style={chartContainerStyles}>
      <div ref={tooltipRef} style={tooltipStyles}>
        <h3>
          <b>ArthaVedh</b>
        </h3>
        <p>{linePrice?.value?.toFixed(2)}</p>
        <p>{currentTime}</p>
      </div>

      <div style={chartInfoStyles}>
        <div>{companyName}</div>
        <div style={chartInfoDivStyles}>
          <div style={chartInfoItemStyles}>OPEN: {candlePrice?.open}</div>
          <div style={chartInfoItemStyles}>HIGH: {candlePrice?.high}</div>
          <div style={chartInfoItemStyles}>LOW: {candlePrice?.low}</div>
          <div style={chartInfoItemStyles}>CLOSE: {candlePrice?.close}</div>
        </div>
        <div>VALUE: {linePrice?.value}</div>
      </div>

      <div className="popup" style={popupStyles}>
        {popupMessage && <p>{popupMessage}</p>}
      </div>
    </div>
  );
}

export default Charts;
