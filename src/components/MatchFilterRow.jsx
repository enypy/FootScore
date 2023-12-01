import InputDate from "./matchFilter/InputDate"
import CountrySelect from "./matchFilter/CountrySelect";
import LeagueSelect from "./matchFilter/LeagueSelect";

export default function MatchFilterRow({ valueFrom, valueTo, onChangeFrom, onChangeTo, setCountryId, setLeagueId }) {

    const maxTo = new Date(Date(valueFrom) + 15 * 24 * 60 * 60 * 1000).toISOString().split('T', 1)[0]

    function datesDiff(a, b) {
        a = a.getTime();
        b = (b || new Date()).getTime();
        var c = a > b ? a : b,
            d = a > b ? b : a;
        return Math.abs(Math.ceil((c - d) / 86400000));
    }

    if (datesDiff(new Date(valueFrom), new Date(valueTo)) > 15 || new Date(valueFrom) > new Date(valueTo)) {
        onChangeTo(valueFrom)
    }

    return (
        <div className="d-flex flex-row justify-content-center pb-3 sticky-top" style={{ backgroundColor: '#79dfc1' }}>
            <InputDate label={'From'} value={valueFrom} onChange={onChangeFrom} min={''} max={''} />
            <InputDate label={'To'} value={valueTo} onChange={onChangeTo} min={valueFrom} max={maxTo} />
            <CountrySelect label={'Country'} setCountryId={setCountryId} />
            <LeagueSelect label={'League'} setLeagueId={setLeagueId} />
        </div>
    )
}