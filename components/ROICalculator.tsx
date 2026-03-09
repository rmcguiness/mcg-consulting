"use client";

import { useState } from "react";

export default function ROICalculator() {
  const [bookingsPerMonth, setBookingsPerMonth] = useState(30);
  const [avgBookingValue, setAvgBookingValue] = useState(400);
  const [websitePercent, setWebsitePercent] = useState(10);

  const currentWebRevenue =
    bookingsPerMonth * avgBookingValue * (websitePercent / 100);
  const additionalPercent = 35; // midpoint of 30-40%
  const additionalBookings = Math.round(
    bookingsPerMonth * (websitePercent / 100) * (additionalPercent / 100) +
      bookingsPerMonth * ((100 - websitePercent) / 100) * 0.15
  );
  const additionalRevenue = additionalBookings * avgBookingValue;
  const investmentLow = 3500;
  const investmentHigh = 7500;
  const paybackMonths = Math.ceil(
    (investmentLow + investmentHigh) / 2 / (additionalRevenue || 1)
  );

  return (
    <section className="section-padding bg-navy-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
            What Could a Modern Website Do for Your Business?
          </h2>
          <p className="text-lg text-navy-600 max-w-2xl mx-auto">
            Adjust the sliders to match your business. See how much revenue a
            booking-ready website could add.
          </p>
        </div>

        <div className="card-ios bg-white p-8 sm:p-10">
          <div className="grid gap-8 mb-10">
            {/* Bookings per month */}
            <div>
              <label className="flex justify-between text-sm font-semibold text-navy-900 mb-2">
                <span>Bookings per month</span>
                <span className="text-navy-600">{bookingsPerMonth}</span>
              </label>
              <input
                type="range"
                min={10}
                max={200}
                step={5}
                value={bookingsPerMonth}
                onChange={(e) => setBookingsPerMonth(Number(e.target.value))}
                className="w-full accent-navy-700"
              />
              <div className="flex justify-between text-xs text-navy-400 mt-1">
                <span>10</span>
                <span>200</span>
              </div>
            </div>

            {/* Average booking value */}
            <div>
              <label className="flex justify-between text-sm font-semibold text-navy-900 mb-2">
                <span>Average booking value</span>
                <span className="text-navy-600">
                  ${avgBookingValue.toLocaleString()}
                </span>
              </label>
              <input
                type="range"
                min={50}
                max={2000}
                step={25}
                value={avgBookingValue}
                onChange={(e) => setAvgBookingValue(Number(e.target.value))}
                className="w-full accent-navy-700"
              />
              <div className="flex justify-between text-xs text-navy-400 mt-1">
                <span>$50</span>
                <span>$2,000</span>
              </div>
            </div>

            {/* Website booking percentage */}
            <div>
              <label className="flex justify-between text-sm font-semibold text-navy-900 mb-2">
                <span>Bookings from your website currently</span>
                <span className="text-navy-600">{websitePercent}%</span>
              </label>
              <input
                type="range"
                min={0}
                max={50}
                step={5}
                value={websitePercent}
                onChange={(e) => setWebsitePercent(Number(e.target.value))}
                className="w-full accent-navy-700"
              />
              <div className="flex justify-between text-xs text-navy-400 mt-1">
                <span>0%</span>
                <span>50%</span>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="border-t border-navy-100 pt-8">
            <div className="bg-navy-50 rounded-2xl p-6 sm:p-8 text-center">
              <p className="text-navy-600 text-sm mb-1">
                A modern site typically adds 30–40% more online bookings
              </p>
              <p className="text-4xl sm:text-5xl font-bold text-navy-900 mb-2">
                ~${additionalRevenue.toLocaleString()}
                <span className="text-lg font-normal text-navy-600">/mo</span>
              </p>
              <p className="text-navy-600 text-sm mb-6">
                in estimated new revenue ({additionalBookings} additional
                bookings)
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
                <div className="bg-white rounded-xl px-5 py-3">
                  <span className="text-navy-500">MCG investment: </span>
                  <span className="font-semibold text-navy-900">
                    ${investmentLow.toLocaleString()}–$
                    {investmentHigh.toLocaleString()}
                  </span>
                  <span className="text-navy-500"> one-time</span>
                </div>
                <div className="bg-white rounded-xl px-5 py-3">
                  <span className="text-navy-500">Estimated payback: </span>
                  <span className="font-semibold text-navy-900">
                    {paybackMonths} {paybackMonths === 1 ? "month" : "months"}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-xs text-navy-400 text-center mt-4">
              Estimates based on industry averages for Keys tourism businesses.
              Individual results vary.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
