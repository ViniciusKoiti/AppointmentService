import AppointmentProps from "./apponintmentProps";

class Appointment {

    private props: AppointmentProps

    get customer(): string {
        return this.props.customer;
    }

    get startsAt(): Date {
        return this.props.startsAt;
    }

    get endsAt(): Date {
        return this.props.endsAt;
    }

    constructor(props: AppointmentProps){
        const { startsAt, endsAt } = props;

        if (startsAt <= new Date()) {
            throw new Error("Invalid start date");
        }

        if (endsAt <= startsAt){
            throw new Error("Invalid end date")
        }

        this.props = props;
    }
}

export default Appointment;